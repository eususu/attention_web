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

export default function RatedTabs(props: Partial<TabListProps>) {
  const router = useRouter()


  return (
    <div className={useStyles.root}>
      <TabList className="flex" defaultSelectedValue={"full"} { ...props } onTabSelect={(event, data) => {
        switch(data.value) {
          case "other":
            router.push('/view/other/0');
            break;
          case "noelse":
            router.push('/view/noelse/0');
            break;
          case "yes":
            router.push('/view/yes/0');
            break;
          case "full":
            router.push('/view/full/0');
            break;

        }

      }}>
        <Tab value="other">평가되지 않은 데이터</Tab>
        <Tab value="noelse">NO, ELSE 데이터</Tab>
        <Tab value="yes">YES 데이터</Tab>
        <Tab value="full">전체 데이터</Tab>

      </TabList>

    </div>

  )

}