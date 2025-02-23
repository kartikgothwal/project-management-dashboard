"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
  const data = {
    labels: ["Over Budget", "On Budget", "Under Budget"],
    datasets: [
      {
        label: "Budget",
        data: [19, 33, 48],
        backgroundColor: ["red", "blue", "cyan"],
        borderWidth: 0,
        hoverOffset: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
        align: "center",
        labels: {
          boxWidth: 12,
          useBorderRadius: true,
          borderRadius: 6,
        },
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        display: true,
        color: 'white',
        font: {
          size: 14,
          weight: 'bold',
        },
        formatter: (value) => `${value}%`,
      },
    },
  };

  return (
    <div className="relative h-full w-full">
      <Doughnut data={data} options={options} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-lg font-semibold text-gray-700">5</div>
        <div className="text-xs text-gray-500">Total Projects</div>
      </div>
    </div>
  );
};

export default BudgetChart;
