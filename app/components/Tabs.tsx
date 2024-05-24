"use client"
import * as React from "react";
import { makeStyles, Tab, TabList } from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";
import {
  CalendarMonthRegular,
  CalendarMonthFilled,
  bundleIcon,
} from "@fluentui/react-icons";


const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    padding: "50px 20px",
    rowGap: "20px",
  },
});

export default function Tabs(props: Partial<TabListProps>) {


  return (
    <div className={useStyles.root}>
      <TabList { ...props }>
        <Tab value="ai">AI 평가 데이터</Tab>
        <Tab value="full">전체 데이터</Tab>

      </TabList>

    </div>

  )

}