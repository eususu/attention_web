"use client"
import Chart from "react-apexcharts";

type SummaryChartProps = {
  series:Array<any>
}

export default function SummaryChart(props:SummaryChartProps) {

  const categories:Array<string> = []
  const data:Array<string> = []

  console.log('go SummaryChart')
  console.log(props.series)

  props.series.forEach((entry) =>{
    categories.push(entry.day.substring(5)) //truncate year
    data.push(entry.count)
  })
  const series=[{
      name: 'kaai_poc',
      data: data
    }]

  const options = {
    chart: {
      type: "area",
      height: "300px",
    },
    datalabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    xaxis: {
      categories: categories,
      type: 'datetime'
    },
    yaxis: {
      opposite: true
    },
    title: {
      text: '질문과 답변 사용량'
    },
  }

  console.log(categories)
  console.log(data)

  return (
    <div>

      <Chart
      options={options}
      series={series}
      type="area"

      width={"80%"}
      height={400}
      >

      </Chart>


    </div>

  )
}
