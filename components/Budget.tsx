"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend);

const BudgetChart = () => {
  const data = {
    labels: ["Over Budget", "On Budget", "Under Budget"],
    datasets: [
      {
        label: "Budget",
        data: [19, 33, 48],
        backgroundColor: ["red", "blue", "cyan"],
        borderWidth: 0, // Remove the white border
        hoverOffset: 5, // Add small spacing on hover
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom" as const, // Display legend at the bottom
        align: "center" as const,
        labels: {
          boxWidth: 12, // Reduce box width
          useBorderRadius: true, // Use rounded boxes
          borderRadius: 6, // Apply border radius to boxes
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
  };

  return (
    <div className="relative h-full w-full">
      <Doughnut data={data} options={options} />
      {/* Add Total Projects and Percentage Texts */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-lg font-semibold text-gray-700">5</div>
        <div className="text-xs text-gray-500">Total Projects</div>
      </div>
    </div>
  );
};

export default BudgetChart;
