import { Summary } from "../scripts/types"

type SummaryListProps = {
  series:Summary

}

export default function SummaryList(props:SummaryListProps) {
  return (
    <div className="mx-10">
      <ul>
        {props.series.map((summary) => {
          return (
            <li key={summary.day} className="flex flex-row gap-2">
              <div>
                {summary.day}
              </div>
              <div>
                {summary.total}
              </div>
              <div>
                {summary.yes}
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}