"use client"
import Chart from "react-apexcharts";
import {
  Text
} from '@fluentui/react-components'

type SummaryChartProps = {
  title: string
  series:Array<any>
}

export default function SummaryChart(props:SummaryChartProps) {

  const categories:Array<string> = []
  const data:Array<string> = []

  props.series.forEach((entry) =>{
    categories.push(entry.day.substring(5)) //truncate year
    data.push(entry.count)
  })
  const series=[{
      name: 'kaai_poc',
      data: data
    }]

  const options = {
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: categories,
      type: 'datetime'
    },
  }

  return (
    <div className="mx-10">
      <div>
        <Text weight="bold" size={400}>{props.title}</Text>
      </div>

    <Chart
      options={options}
      series={series}
      type="area"
      height={400}
    ></Chart>
    </div>
  )
}
