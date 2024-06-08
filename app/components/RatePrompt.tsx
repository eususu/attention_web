import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components";

export default function RatePrompt() {
  return (
    <>
    <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell className="w-48">역할</TableHeaderCell>
            <TableHeaderCell>프롬프트 내용</TableHeaderCell>
          </TableRow>
        </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>시스템 롤</TableCell>
          <TableCell>you are helpful assistant</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>사용자 롤</TableCell>
          <TableCell>잘 분류하세요.</TableCell>
        </TableRow>
      </TableBody>

    </Table>
    </>
  )

}