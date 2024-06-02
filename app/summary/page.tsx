import SummaryChart from "../components/SummaryChart";
import SummaryList from "../components/SummaryList";
import SummaryPieChart from "../components/SummaryPieChart";
import api from "../scripts/api";


export default async function Summary() {
  const summary = await api.fetch.get_summary('kaai_poc')
  console.log(summary)

  const line_series:Array<any> = []
  const pie_series:Array<any> = [
    { kind: 'YES', count: 0},
    { kind: 'NO', count: 0},
    { kind: 'ELSE', count: 0},
    //{ kind: 'NOT RATED', count: 0},
  ]

  let line_total = 0;

  // generate pie chart series
  summary.forEach((entry) => {
    console.log(entry)
    line_series.push({day: entry.day, count:entry.total})
    line_total += entry.total;

    pie_series[0].count += entry.yes;
    pie_series[1].count += entry.no;
    pie_series[2].count += entry.total - entry.empty - entry.yes - entry.no;
    //pie_series[3].count += entry.empty;
  });

  return (
    <main className="w-full h-full">
      <div className="flex flex-col mt-10 mx-10">
        <div className="flex flex-row px-5 divide-x-8">
          <div className="basis-3/4 flex flex-col gap-2 divide-y-2">
            <SummaryChart title={`RAG 사용량 (${line_total} 개)`} series={line_series} />
            <SummaryList series={summary} />
          </div>
          <div className="basis-1/4">
            <SummaryPieChart series={pie_series} />
          </div>
        </div>
      </div>
    </main>

  )
}