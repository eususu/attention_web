"use client"
import * as React from "react";
import { makeStyles, Tab, TabList } from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";
import {
  CalendarMonthRegular,
  CalendarMonthFilled,
  bundleIcon,
} from "@fluentui/react-icons";
import { useRouter } from "next/navigation";



const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "50px 20px",
    rowGap: "20px",
  }
});

export default function Tabs(props: Partial<TabListProps>) {
  const router = useRouter();


  return (
    <div className={useStyles.root}>
      <TabList className="flex" defaultSelectedValue={"full"} { ...props } onTabSelect={(event, data) => {

        console.log(`tab selected:${data.value}`)
        switch(data.value) {
          case 'summary':
            router.push('/summary')
            return;
          case 'ai':
            router.push('/view')
            return;
          case 'full':
            router.push('/full_view/0');
            return;
        }

      }} >
        <Tab value="summary">요약</Tab>
        <Tab value="ai">AI 평가 데이터</Tab>
        <Tab value="full">전체 데이터</Tab>

      </TabList>

    </div>

  )

}