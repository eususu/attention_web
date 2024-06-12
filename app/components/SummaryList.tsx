"use client"
import { Table, TableBody, TableCell, TableCellLayout, TableHeader, TableHeaderCell, TableRow, tokens } from "@fluentui/react-components"
import { Summary } from "../scripts/types"

type SummaryListProps = {
  series:Summary

}

import {
  CalendarRegular,
  CheckmarkCircleFilled,
  WarningRegular,
  ErrorCircleFilled,
  QuestionCircleRegular,
} from "@fluentui/react-icons";

import {
  Text
} from "@fluentui/react-components";

const columns = [
  {name:"날짜", icon: <CalendarRegular/>},
  {name:"전체 사용량"},
  {name:"적절한 응답", icon: <CheckmarkCircleFilled className="text-lime-600"/>},
  {name:"정보 부족", icon: <WarningRegular className="text-orange-400"/>},
  {name:"검토 필요", icon: <ErrorCircleFilled className="text-yellow-500"/>},
  {name:"미평가", icon: <QuestionCircleRegular className="text-slate-600"/>}
]

export default function SummaryList(props:SummaryListProps) {
  return (
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableHeaderCell key={column.name}>
                  <TableCellLayout media={column?.icon}>
                    <Text weight="bold" size={400}>{column.name}</Text>
                  </TableCellLayout>
                </TableHeaderCell>
              );
            })}
          </TableRow>
        </TableHeader>
        <TableBody>
          {props.series.map((summary) => {
            const else_count = summary.total-summary.empty-summary.yes-summary.no;
            return (
              <TableRow key={summary.day} className="flex flex-row gap-2">
                <TableCell>{summary.day}</TableCell>
                <TableCell>{summary.total}</TableCell>
                <TableCell>{summary.yes == 0 ? 0 :<Text className="text-lime-600">{summary.yes}</Text>}</TableCell>
                <TableCell>{summary.no}</TableCell>
                <TableCell>{else_count == 0 ? 0 : <Text weight="bold" size={400} className="text-yellow-500">{else_count}</Text>}</TableCell>
                <TableCell>{summary.empty}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
  );
}