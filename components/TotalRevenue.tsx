"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TotalRevenueChart = () => {
  const data = {
    labels: ['19 June', '20 June', '21 June', '22 June', '23 June', '24 June', '25 June'],
    datasets: [
      {
        label: 'Total Revenue',
        data: [0, 1500, 3000, 4000, 5000, 6000, 6500],
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Cost (€)',
        },
      },
    },
  };

  return <div style={{ height: '100%', width: '100%' }}><Line data={data} options={options} /></div>;
};

export default TotalRevenueChart;
