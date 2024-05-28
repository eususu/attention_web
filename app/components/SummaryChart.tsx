"use client"
import Chart from "react-apexcharts";


export default function SummaryChart() {
  const options = {
    chart: {
      type: 'line'
    },
    xaxis: {
      categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
    }
  }
  const series= [{
      name: 'sales',
      data: [30,40,35,50,49,60,70,91,125]
    }]

  return (
    <div>

      <Chart
      options={options}
      series={series}

      width={"80%"}
      height={300}
      >

      </Chart>


    </div>

  )
}
