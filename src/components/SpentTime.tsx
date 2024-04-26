'use client'
import { ApexOptions } from 'apexcharts';
import dynamic from 'next/dynamic';
import React from 'react'
import ReactApexChart from 'react-apexcharts';


const DynamicLineChart=dynamic(()=>import("react-apexcharts"),{ssr:false})


const series = [
  {
    name: "High - 2013",
    data: [28, 29, 33, 36, 32, 32, 33]
  },
  // {
  //   name: "Low - 2013",
  //   data: [12, 11, 14, 18, 17, 13, 13]
  // }
];
const options: ApexOptions = {
  chart: {
    height: 350,
    type: 'line',
    dropShadow: {
      enabled: true,
      color: '#000',
      top: 18,
      left: 7,
      blur: 10,
      opacity: 0.2
    },
    zoom: {
      enabled: false
    },
    toolbar: {
      show: false
    }
  },
  colors: ['#77B6EA', '#545454'],
  dataLabels: {
    enabled: true,
  },
  stroke: {
    curve: 'smooth'
  },
  // title: {
  //   text: 'Average High & Low Temperature',
  //   align: 'left'
  // },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
      opacity: 0.5
    },
  },
  markers: {
    size: 1
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    title: {
      text: 'Month'
    }
  },
  yaxis: {
    title: {
      text: 'Temperature'
    },
    min: 5,
    max: 40
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5
  }
};





export default function SpentTime() {
  return (
    <div className='flex md:w-[48%] shadow-xl p-5 rounded-xl flex-col'>
      <h2 className='font-semibold'>Spent Time</h2>
      <div>
        <DynamicLineChart
        options={options} 
        series={series} 
        type='line' 
        height={200}
        width={"100%"}
         />
      </div>
    </div>
  )
}
