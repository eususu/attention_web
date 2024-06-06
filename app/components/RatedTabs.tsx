"use client"
import * as React from "react";
import { makeStyles, Tab, TabList } from "@fluentui/react-components";
import type { TabListProps } from "@fluentui/react-components";
import {
  SettingsRegular,
  SettingsFilled,
  CalendarMonthRegular,
  CalendarMonthFilled,
  bundleIcon,
} from "@fluentui/react-icons";
import { useRouter } from "next/navigation";


const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const Settings = bundleIcon(SettingsFilled, SettingsRegular)
const useStyles = makeStyles({
  root: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    rowGap: "20px",
  }
});

type Props = {
  defaultSelectedTab?:string
}

export default function RatedTabs(props: Props) {
  const router = useRouter()

  return (
    <div className={useStyles().root}>
      <TabList className="flex" defaultSelectedValue={props.defaultSelectedTab} onTabSelect={(event, data) => {
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
          case "settings":
            router.push('/view/settings');
            break;
        }
      }}>
        <Tab value="other">평가되지 않은 데이터</Tab>
        <Tab value="noelse">NO, ELSE 데이터</Tab>
        <Tab value="yes">YES 데이터</Tab>
        <Tab icon={<Settings/>} value="settings">AI 평가 설정</Tab>
      </TabList>

    </div>

  )

}