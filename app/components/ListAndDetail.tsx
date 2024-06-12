"use client"

import React, { useState } from "react";
import QAList from "./QAList";
import DetailView from "./DetailView";

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
    <div className="w-full h-full max-w-5xl 2xl:max-w-7xl flex flex-col 2xl:flex-col gap-2 overflow-y-hidden p-4">
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