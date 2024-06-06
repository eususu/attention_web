"use client"
import * as React from "react";
import { makeStyles, Tab, TabList } from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";
import { usePathname, useRouter } from "next/navigation";

const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: "50px 20px",
    rowGap: "20px",
  }
});

export default function Tabs(props: Partial<TabListProps>) {
  const router = useRouter();
  const pathname = usePathname()
  const paths = pathname.split('/')
  const path = paths[1]
  console.log(path)

  let selection = "full"
  switch(path) {
    case 'summary': selection = 'summary'; break;
    case 'full': selection = 'full'; break;
    case 'view': selection = 'view'; break;
    case 'setting': selection = 'setting'; break;
  }

  return (
    <div className="flex flex-row justify-between">
      <TabList className="w-full flex justify-between" defaultSelectedValue={selection} { ...props } onTabSelect={(event, data) => {

        console.log(`tab selected:${data.value}`)
        switch(data.value) {
          case 'summary':
            router.push('/summary')
            return;
          case 'view':
            router.push('/view/yes/0')
            return;
          case 'full':
            router.push('/full_view/0');
            return;
          case 'setting':
            router.push('/setting');
            return;
        }

      }} >
        <div className="flex">

        <Tab value="summary">요약</Tab>
        <Tab value="view">AI 평가 데이터</Tab>
        <Tab value="full">전체 데이터</Tab>
        </div>

        <div className="flex">
        <Tab value="setting">설정</Tab>
        </div>
      </TabList>
      <TabList>
      </TabList>

    </div>

  )

}