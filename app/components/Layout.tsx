"use client"
import { Tab, TabList } from "@fluentui/react-components";
import RatedTabs from "./RatedTabs";
import { usePathname, useRouter } from "next/navigation";
import { ReactElement } from "react";

export default function ViewLayout({ children } : {children:ReactElement}) {
  const pathname = usePathname()
  const paths = pathname.split('/')
  console.log(`ViewLayout pathname=${paths}`)

  const path = paths[2]
  console.log(`ViewLayout path=${path}`)

  return (
    <>
      <RatedTabs defaultSelectedTab={path}></RatedTabs>
      <main className="bg-slate-300 flex flex-col items-center justify-between" style={{height: 'calc(100vh - 44px - 44px)'}}>{children}</main>
    </>

  )
}