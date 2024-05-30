"use client"

import React, { useState } from "react";
import QAList from "./QAList";
import DetailView from "./DetailView";
import { Text } from '@fluentui/react-components'
import Link from "next/link";


type ListAndDetailProps = {
  list:Array<any>
  page:number
}
export default function ListAndDetail(props:ListAndDetailProps) {

  const [selectedItem, setSelectedItem] = useState({
    query: '',
    answer: '',
    rate: '',
    rate_reason: '',
  });

  return (
    <div className="grow w-full flex flex-row items-center justify-between bg-slate-100 items-stretch">
      <div className="bg-slate-500 flex flex-col items-center">
        <QAList list={props.list} onSelectItem={(item) => {
          setSelectedItem(item)
        }}></QAList>
        <div className="text-center flex gap-2">
        <Link href={`/full_view/${(props.page-1)}`}><Text size={400}>이전</Text></Link>
        ...
        <Link href={`/full_view/${(props.page+1)}`}><Text size={400}>다음</Text></Link>
        </div>
      </div>
      <div className="bg-slate-400">
        <DetailView query={selectedItem.query} answer={selectedItem.answer} rate={selectedItem.rate} rate_reason={selectedItem.rate_reason}></DetailView>
      </div>
    </div>

  )
}