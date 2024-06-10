import ViewLayout from "@/app/components/Layout";
import SettingsTable from "@/app/components/SettingsTable"

export default function Settings() {
  return (
    <>
      <ViewLayout>
        <div className="w-full h-full max-w-5xl flex flex-col gap-2 overflow-y-hidden p-4">
          작업중
          <SettingsTable />
        </div>
      </ViewLayout>
    </>
  )
}