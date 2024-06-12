"use client"

import React, { useEffect, useState } from "react";
import QAList from "./QAList";
import DetailView from "./DetailView";
import { Input } from "@fluentui/react-components";

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
    <div className="h-full flex flex-col lg:flex-row gap-2 p-4">
      <div className="lg:max-w-3xl overflow-y-hidden">
        <div className="h-8">
          <Input placeholder="검색어를 입력하세요" onClick={() => alert('미구현')}/>
        </div>
        <div className="h-full overflow-y-scroll">

        <QAList list={props.list} onSelectItem={(item) => {
          setSelectedItem(item)
        }}></QAList>
        </div>
      </div >
      <div className="lg:max-w-4xl">
        <DetailView key={selectedItem.id} {...selectedItem}></DetailView>
      </div>
    </div>

  )
}