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

  const options = {
    chart: {
      type: "area",
      dropShadow: {
        enabled: true,
        top: 3,
        left: 2,
        blur: 4,
        opacity: 1,
      },
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      opacity: 0.8
    },
    xaxis: {
      categories: categories
    },
    title: {
      text: '질문과 답변 사용량'
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
      series={series}

      width={"80%"}
      height={400}
      >

      </Chart>


    </div>

  )
}
