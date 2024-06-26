import {
  Button,
  Input,
  Select, Table, TableBody, TableCell, TableCellActions, TableCellLayout, TableHeader, TableHeaderCell, TableRow,
  Textarea
} from "@fluentui/react-components";

import {
  EditRegular,
  EditFilled,
  DeleteRegular,
  DeleteFilled,
  bundleIcon
} from "@fluentui/react-icons"
import { useState } from "react";

const EditIcon = bundleIcon(EditFilled, EditRegular);
const DeleteIcon = bundleIcon(DeleteFilled, DeleteRegular);

type RoleProp = {
  type: string
  edit_mode: boolean

}
function Role(props:RoleProp) {
  return (
    <Select defaultValue={props.type} disabled={!props.edit_mode}>
      <option value="system">시스템</option>
      <option value="user">사용자</option>
    </Select>
  )

}

export default function RatePrompt() {

  let prompts = [
    {type:"system", prompt: "you are helpful assistant."},
    {type:"user", prompt: "잘 분류하세요."},
  ]
  const [edit_mode, setEditMode] = useState(false);
  return (
    <>
    <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell className="w-48">역할</TableHeaderCell>
            <TableHeaderCell>프롬프트 내용</TableHeaderCell>
            <TableHeaderCell className="w-16"></TableHeaderCell>
          </TableRow>
        </TableHeader>
      <TableBody>
        {
            prompts.map((prompt, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>
                    <Role type={prompt.type} edit_mode={edit_mode}/>
                  </TableCell>
                  <TableCell>
                    {edit_mode ? (
                      <Textarea className="w-full" value={prompt.prompt}/>
                    ) : (
                      prompt.prompt
                    )}
                  </TableCell>
                  <TableCell>
                    <TableCellActions>
                      <Button
                        icon={<EditIcon />}
                        appearance="subtle"
                        onClick={() => {
                          setEditMode(!edit_mode);
                        }}
                      />
                      <Button
                        icon={<DeleteIcon />}
                        appearance="subtle"
                        onClick={() => {
                          delete prompts[index];
                        }}
                      />
                    </TableCellActions>
                  </TableCell>
                </TableRow>
              );

            })

        }
      </TableBody>

    </Table>
    </>
  )

}