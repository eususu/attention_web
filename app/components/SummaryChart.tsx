"use client"
import Chart from "react-apexcharts";

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
    title: {
      text: props.title
    },
  }

  return (
    <div className="mx-10">

    <Chart
      options={options}
      series={series}
      type="area"
      height={400}
    ></Chart>
    </div>
  )
}
