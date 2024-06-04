"use client"

import React, { useState } from "react";
import QAList from "./QAList";
import DetailView from "./DetailView";
import { Text } from '@fluentui/react-components'
import Link from "next/link";


type ListAndDetailProps = {
  list:Array<any>
  page:number
  pathname:string
}
export default function ListAndDetail(props:ListAndDetailProps) {

  const [selectedItem, setSelectedItem] = useState({
    query: '',
    answer: '',
    rate: '',
    rate_reason: '',
  });

  return (
    <div className="grow w-full flex flex-row items-center justify-between items-stretch gap-2">
      <div className="flex flex-col items-center gap-4">
        <QAList list={props.list} onSelectItem={(item) => {
          setSelectedItem(item)
        }}></QAList>
        <div className="text-center flex gap-4">
        <Link href={`${props.pathname}/${(props.page-1)}`}><Text size={400}>이전</Text></Link>
        ...
        <Link href={`${props.pathname}/${(props.page+1)}`}><Text size={400}>다음</Text></Link>
        </div>
      </div>
      <div className="">
        <DetailView query={selectedItem.query} answer={selectedItem.answer} rate={selectedItem.rate} rate_reason={selectedItem.rate_reason}></DetailView>
      </div>
    </div>

  )
}