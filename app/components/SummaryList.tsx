"use client"
import { Table, TableBody, TableCell, TableCellLayout, TableHeader, TableHeaderCell, TableRow } from "@fluentui/react-components"
import { Summary } from "../scripts/types"

type SummaryListProps = {
  series:Summary

}

import {
  CalendarRegular,
  CheckmarkCircleFilled,
  WarningRegular,
  ErrorCircleFilled,
} from "@fluentui/react-icons";

import {
  Text
} from "@fluentui/react-components";

const columns = [
  {name:"날짜", icon: <CalendarRegular/>},
  {name:"전체 사용량"},
  {name:"적절한 응답", icon: <CheckmarkCircleFilled className="text-lime-600"/>},
  {name:"정보 부족", icon: <WarningRegular className="text-orange-600"/>},
  {name:"평가 필요", icon: <ErrorCircleFilled className="text-red-500"/>}
]

export default function SummaryList(props:SummaryListProps) {
  return (
    <div className="mx-12">
      <div className="mt-4">
        <Text weight="bold" size={400}>
          RAG 데이터
        </Text>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableHeaderCell key={column.name}>
                  <TableCellLayout media={column?.icon}>
                    {column.name}
                  </TableCellLayout>
                </TableHeaderCell>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.series.map((summary) => {
            return (
              <TableRow key={summary.day} className="flex flex-row gap-2">
                <TableCell>{summary.day}</TableCell>
                <TableCell>{summary.total}</TableCell>
                <TableCell>{summary.yes}</TableCell>
                <TableCell>{summary.no}</TableCell>
                <TableCell>{summary.empty}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}