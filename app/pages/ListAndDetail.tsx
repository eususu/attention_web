"use client"

import React, { useState } from "react";
import QAList from "../components/QAList";
import DetailView from "../components/DetailView";


type ListAndDetailProps = {
  list:Array<any>
  selectedItem:any

}
export default function ListAndDetail(props:ListAndDetailProps) {

  const [selectedItem, setSelectedItem] = useState({
    query: '김포공항 샐러드 가게?',
    answer: '김포공항에는 ㅁ뭐가ㅝ가 블라블바합니다.',
    rate: 'NO',
    rate_reason: '아무리 생각해도 잘 모르겠습니다.',
  });


  return (
      <div className="grow w-full flex flex-row items-center justify-between bg-slate-100 items-stretch">
        <div className="bg-slate-500">
          <QAList list={props.list} onSelectItem={(item) => {
            setSelectedItem(item)
          }}></QAList>
        </div>
        <div className="bg-slate-400">
          <DetailView query={selectedItem.query} answer={selectedItem.answer} rate={selectedItem.rate} rate_reason={selectedItem.rate_reason}></DetailView>
        </div>
      </div>

  )
}