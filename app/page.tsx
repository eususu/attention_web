"use client"
import Image from "next/image";
import QAList from "./components/QAList";
import DetailView from "./components/DetailView";
import Tabs from "./components/Tabs";

import axios from "axios";
import { useEffect, useState } from "react";


async function load_qainfo_list() {
  const service_name = 'kaai_poc'
  const url=`http://172.16.10.45:8008/api/qa/${service_name}?page=0`

  const response = await fetch(
    url,
    {
      method: 'get',
      mode: 'cors',
      cache: 'no-cache',
    }
  );
  const body = await response.json()
  console.log(body)

  return body.qa_list

  const list = [{
    query: '김포공항 샐러드 가게?',
    answer: '김포공항에는 ㅁ뭐가ㅝ가 블라블바합니다.',
    rate: 'NO',
    rate_reason: '아무리 생각해도 잘 모르겠습니다.',
  }]
  return list
}

function onSelectItem(item:any) {
  console.log(item)

}
export default async function Home() {

  const selectedItem={
    query: '김포공항 샐러드 가게?',
    answer: '김포공항에는 ㅁ뭐가ㅝ가 블라블바합니다.',
    rate: 'NO',
    rate_reason: '아무리 생각해도 잘 모르겠습니다.',
  }

  const [qa_list, setQAList] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const qa_list = await load_qainfo_list()
      setQAList(qa_list)
    }

    fetchData()

  }, [qa_list])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full">
        <Tabs></Tabs>
      </div>
      <div className="grow w-full flex flex-row items-center justify-between bg-slate-100 items-stretch">
        <div className="bg-slate-500">
          <QAList list={qa_list} onSelectItem={onSelectItem}></QAList>
        </div>
        <div className="bg-slate-400">
          <DetailView query={selectedItem.query} answer={selectedItem.answer} rate={selectedItem.rate} rate_reason={selectedItem.rate_reason}></DetailView>
        </div>
      </div>
      <div>
        C
      </div>
    </main>
  );
}
