"use client"
import Chart from "react-apexcharts";
import {
  Text
} from '@fluentui/react-components'

type SummaryPieChartProps = {
  series:Array<any>
}

export default function SummaryPieChart(props:SummaryPieChartProps) {
  const categories:Array<string> = []
  const data:Array<string> = []

  props.series.forEach((entry) =>{
    categories.push(entry.kind)
    data.push(entry.count)
  })

  const options = {
    chart: {
      type: "pie",
    },
    labels: categories,
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
  }

  return (
    <div>
      <div className="ml-4 mt-4">
        <Text weight="bold" size={400}>답변 품질 평가</Text>
      </div>
      <Chart
      options={options}
      series={data}
      width={400}
      height={400}
      type="pie"
      ></Chart>
    </div>

  )
}