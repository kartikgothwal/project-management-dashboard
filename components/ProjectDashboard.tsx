"use client";
import React from "react";
import ProjectCard from "./Layout/ProjectCard";
import { FaPlus, FaDownload } from "react-icons/fa";

const projects = [
  {
    name: "Insurance App",
    client: "Verti",
    budget: 70000,
    profitability: -2500,
    actualHours: 1100,
    soldHours: 1000,
    note: "100 hours over Budget!",
  },
  {
    name: "Neo",
    client: "Bankia",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 1000,
  },
  {
    name: "VR Website",
    client: "Barça",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 2000,
  },
  {
    name: "VR Website",
    client: "Barça",
    budget: 70000,
    profitability: 4000,
    actualHours: 1100,
    soldHours: 1100,
  },
];

const ProjectDashboard = () => {
  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex gap-4 items-center mb-4">
        <h2 className="text-2xl font-bold">Budget Status</h2>
        <div className="flex gap-4 items-center">
          <button className="flex items-center bg-gray-500 text-white px-4 py-2 rounded-lg">
            <FaPlus className="mr-2" />
            Add New Project
          </button>
          <button className="flex items-center border-2 border-gray-500 text-gray-700 px-4 py-2 rounded-lg">
            <FaDownload className="mr-2" />
            Download Report
          </button>
          <input
            type="date"
            className="  border-2 border-gray-500 text-gray-700 px-4 py-2 rounded-lg"
          />
          <button className="flex items-center border-2 border-gray-500 text-gray-700 px-4 py-2 rounded-lg">
            Filter
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectDashboard;
