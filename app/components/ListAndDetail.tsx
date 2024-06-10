"use client"

import React, { useState } from "react";
import QAList from "./QAList";
import DetailView from "./DetailView";
import { Text } from '@fluentui/react-components'
import Link from "next/link";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";


type ListAndDetailProps = {
  list:Array<any>
  page:number
}
export default function ListAndDetail(props:ListAndDetailProps) {

  const [selectedItem, setSelectedItem] = useState({
    id:-1,
    date: '',
    query: '',
    answer: '',
    rate: null,
    rate_reason: null,
    uuid: '',
  });

  return (
    <div className="w-full h-full max-w-5xl flex flex-col gap-2 overflow-y-hidden p-4">
      <div className="h-74">
        <DetailView key={selectedItem.id} {...selectedItem}></DetailView>
      </div>
      <div className="overflow-y-scroll">
        <QAList list={props.list} onSelectItem={(item) => {
          setSelectedItem(item)
        }}></QAList>
      </div >
    </div>

  )
}