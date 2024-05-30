"use client"
import Chart from "react-apexcharts";

type SummaryPieChartProps = {
  series:Array<any>
}

export default function SummaryPieChart(props:SummaryPieChartProps) {
  const categories:Array<string> = []
  const data:Array<string> = []

  console.log('go SummaryChart')
  console.log(props.series)

  props.series.forEach((entry) =>{
    categories.push(entry.kind)
    data.push(entry.count)
  })
  console.log(categories)
  console.log(data)

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
    title: {
      text: 'QA 평가 결과'
    },
  }
  const series=[{
      name: 'kaai_poc',
      data: data
    }]

  console.log(categories)
  console.log(data)

  return (
    <div>

      <Chart
      options={options}
      series={data}
      width={400}
      type="pie"
      >

      </Chart>


    </div>

  )
}