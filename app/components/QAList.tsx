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
  useTableFeatures,
  useTableSelection,
  TableColumnDefinition,
  createTableColumn,
} from "@fluentui/react-components";
import RateIcon from "./RateIcon";
import { useEffect, useRef } from "react";
import React from "react";

type Item = {
  [key:string]:any
}

const columns: TableColumnDefinition<Item>[] = [
  createTableColumn<Item>({
    columnId: 'id'
  }),
  createTableColumn<Item>({
    columnId: 'query'
  }),
  createTableColumn<Item>({
    columnId: 'rate'
  }),
]

type QAListProps = {
  list:Array<any>,
  onSelectItem:(item:any)=>void
}
export default function QAList(props:QAListProps) {

  const items = props.list

  const {
    getRows,
    selection: { toggleRow, isRowSelected },
  } = useTableFeatures({
    columns, items
  }, [
    useTableSelection({
      selectionMode: 'single',
    })
  ])

  const rows = getRows((row) => {
    const selected = isRowSelected(row.rowId);
    return {
      ...row,
      onClick: (e: React.MouseEvent) => toggleRow(e, row.rowId),
      onKeyDown: (e: React.KeyboardEvent) => {
        if (e.key === ' ') {
          e.preventDefault();
          toggleRow(e, row.rowId);
        }
      },
      selected,
      appearance: selected ? ("brand" as const) : ("none" as const),
    };
  })

  const tbody = useRef();

  useEffect(() => {
    tbody.current.firstChild.click()

  }, [])

  return (
    <Table className="border-2">
      <TableHeader>
        <TableRow>
          <TableCell className="w-12 text-center">
            ID
          </TableCell>
          <TableCell>
            질문 
          </TableCell>
          <TableCell className="w-24 text-center">
            답변 품질
          </TableCell>
        </TableRow>

      </TableHeader>
      <TableBody ref={tbody}>
        { rows.map(({ item, selected, onClick, onKeyDown, appearance }) => (
          <TableRow
            key={item.id}
            onClick={(e) => {
              props.onSelectItem(item);
              onClick(e)
            }}
            aria-selected={selected}
            appearance={appearance}
            >
            <TableCell className="text-right">
              {item.id}
            </TableCell>
            <TableCell>
              {item.query}
            </TableCell>
            <TableCell className="w-24 text-center">
              <RateIcon rate={item.rate}/>
            </TableCell>
          </TableRow>
        ))}

      </TableBody>
    </Table>
  )
}