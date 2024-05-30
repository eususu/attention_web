import SummaryChart from "../components/SummaryChart";
import SummaryPieChart from "../components/SummaryPieChart";
import api from "../scripts/api";


export default async function Summary() {
  const {summary, pie} = await api.fetch.get_summary('kaai_poc')
  console.log(summary)
  console.log(pie)

  return (
    <main className="w-full h-full">
      summary
      <div className="flex flex-col">
        <div>
          1 chart
          <SummaryChart series={summary} />
        </div>
        <div className="flex flex-row">
          <div>
            <SummaryPieChart series={pie}/>
          </div>
          <div className="w-full">
            empty
          </div>

        </div>
      </div>
    </main>

  )
}