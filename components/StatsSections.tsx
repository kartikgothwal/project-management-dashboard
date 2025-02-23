import React from "react";
import {
  FaThLarge,
  FaCheckCircle,
  FaSyncAlt,
  FaExclamationTriangle,
  FaUsers,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaThLarge />,
    value: 5,
    label: "Total Projects",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    icon: <FaCheckCircle />,
    value: 1,
    label: "Completed",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    icon: <FaSyncAlt />,
    value: 3,
    label: "Ongoing",
    bgColor: "bg-white",
    textColor: "text-black",
  },
  {
    icon: <FaExclamationTriangle />,
    value: 1,
    label: "Delayed",
    bgColor: "bg-red-500",
    textColor: "text-white",
  },
  {
    icon: <FaUsers />,
    value: 5,
    label: "Employees",
    bgColor: "bg-white",
    textColor: "text-black",
  },
];
const StatsSections = () => {
  return (
    <div className="grid grid-cols-5 gap-4 ">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-md flex flex-col items-center relative ${stat.bgColor} ${stat.textColor} h-[7rem]`}
        >
          <div className="text-2xl absolute left-4 top-4">{stat.icon}</div>
          <div className="text-3xl font-bold">{stat.value}</div>
          <div className="text-sm">{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

export default StatsSections;
