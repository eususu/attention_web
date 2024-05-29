"use client"
import * as React from "react";
import { makeStyles, Tab, TabList } from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";
import {
  CalendarMonthRegular,
  CalendarMonthFilled,
  bundleIcon,
} from "@fluentui/react-icons";
import { redirect } from "next/navigation";
import Link from "next/link";


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

export default function RatedTabs(props: Partial<TabListProps>) {


  return (
    <div className={useStyles.root}>
      <TabList className="flex" defaultSelectedValue={"full"} { ...props } >
        <Tab value="summary"><Link href="/summary">누락 데이터</Link></Tab>
        <Tab value="ai"><Link href="/view/2">YES 평가 데이터</Link></Tab>
        <Tab value="full"><Link href="/full_view/0">전체 데이터</Link></Tab>

      </TabList>

    </div>

  )

}