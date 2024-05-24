"use client"
import {
  FolderRegular,
  EditRegular,
  OpenRegular,
  DocumentRegular,
  PeopleRegular,
  DocumentPdfRegular,
  VideoRegular,
} from "@fluentui/react-icons";
import {
  TableBody,
  TableCell,
  TableRow,
  Table,
  TableHeader,
  TableHeaderCell,
  TableCellLayout,
  PresenceBadgeStatus,
  Avatar,
} from "@fluentui/react-components";

function QAItem() {
  return (
    <div className="flex flex-row gap-2">
      <div>id</div><div>김포공항 샐러드 가게?</div>
    </div>
  )
}
const columns = [
  {
    id: "id",
    columnKey: "query",
    label:"질문",
  }
]

type QAListProps = {
  list:Array<any>,
  onSelectItem:(item:any)=>void
}
export default function QAList(props:QAListProps) {

  return (
    <Table>
      <TableHeader>
        { columns.map((column) => (
          <TableRow key={column.id}>
            <TableCell className="w-12">
              {column.id}
              </TableCell>
            <TableCell>
              {column.label}
              </TableCell>
          </TableRow>
        ))}

      </TableHeader>
      <TableBody>
        { props.list.map((item) => (
          <TableRow key={item.id} onClick={() => props.onSelectItem(item)}>
            <TableCell>
              {item.id}
            </TableCell>
            <TableCell>
              {item.query}
            </TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  )
}