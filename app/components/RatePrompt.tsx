import { Table, TableBody, TableCell, TableRow } from "@fluentui/react-components";

export default function RatePrompt() {
  return (
    <>
    <Table>
      <TableBody>
        <TableRow>
          <TableCell>시스템 롤</TableCell>
          <TableCell>you are helpful assistant</TableCell>
          <TableCell>사용자 롤</TableCell>
          <TableCell>잘 분류하세요.</TableCell>
        </TableRow>
      </TableBody>

    </Table>
    </>
  )

}