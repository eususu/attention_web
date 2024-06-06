"use client"
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell } from "@fluentui/react-components";


type Props = {

}
export default function SettingsTable() {
  return (
    <Table>
      <TableHeader>
        <TableHeaderCell>header</TableHeaderCell>
        <TableHeaderCell>header</TableHeaderCell>

      </TableHeader>
      <TableBody>
        <TableCell>hi</TableCell>
        <TableCell>value</TableCell>
      </TableBody>
    </Table>
  )
}
