import React, { useMemo } from 'react'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';

import { Line } from 'react-chartjs-2';
// import faker from 'faker';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const options = {
  responsibe: true,
  scales:{
    y: {
      min: 0,
      max: 4
    }
  },
  plugins: {
    legend: {
      position: 'top',
      display: false
    },
    title: {
      display: true,
      text: 'K/D Solo',
    },
  },
};

export const LineChart = ({ labels, scores}) => {

  const data = {
      datasets: [
        {
          label: 'K/D',
          data: scores,
          tension: 0.3,
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
      labels
    }

  return (
    <Line data={data} options = {options} />

  )
}
