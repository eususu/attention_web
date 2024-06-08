import {
  Button,
  Input,
  Select, Table, TableBody, TableCell, TableCellActions, TableCellLayout, TableHeader, TableHeaderCell, TableRow
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

export default function RatePrompt() {

  let prompts = [
    {type:"system", prompt: "you are helpful assistant."},
    {type:"user", prompt: "잘 분류하세요."},
  ]
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
              const [edit_mode, setEditMode] = useState(false);
              return (
                <TableRow>
                  <TableCell>{prompt.type}</TableCell>
                  <TableCell>{edit_mode? <textarea>{prompt.prompt}</textarea> :prompt.prompt}</TableCell>
                  <TableCell>
                    <TableCellActions>
                      <Button
                        icon={<EditIcon />}
                        appearance="subtle"
                        onClick={() => {
                          setEditMode(!edit_mode)
                        }}
                      />
                      <Button
                        icon={<DeleteIcon />}
                        appearance="subtle"
                        onClick={() => {
                          delete prompts[index]
                        }}
                      />

                    </TableCellActions>
                  </TableCell>
                </TableRow>)

            })

        }
        <TableRow>
          <TableCell><Select>
            <option>시스템</option>
            <option>사용자</option>
            </Select></TableCell>
          <TableCell><Input placeholder="새 프롬프트를 입력하세요."/></TableCell>
        </TableRow>
      </TableBody>

    </Table>
    </>
  )

}