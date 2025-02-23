"use client";
import React from "react";
import Image from "next/image";
import { ClientLogo } from "@/asset";

interface Project {
  name: string;
  client: string;
  budget: number;
  profitability: number;
  actualHours: number;
  soldHours: number;
}

const ProjectCard = ({ project }: { project: Project }) => {
  let progressBarColor = "bg-green-500";
  let TextColor = "text-gray-500 ";
  if (project.profitability < 0) {
    progressBarColor = "bg-red-500";
    TextColor = "text-red-500 font-bold";
  } else if (project.profitability < 5000) {
    progressBarColor = "bg-yellow-500";
  }

  const progress = Math.min(
    (project.actualHours / project.soldHours) * 100,
    100
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 relative">
      <div className="absolute top-2 right-2">
        <Image
          src={ClientLogo}
          alt="Client Logo"
          width={30}
          height={30}
          className="rounded-full h-[30px] w-[35px]"
        />
      </div>

      <h3 className="text-base font-medium text-gray-800 mb-1">
        {project.name}
      </h3>
      <p className="text-xs text-gray-500 mb-2">{project.client}</p>

      <p className="text-[16px] text-gray-400">
        Total Budget:{" "}
        <span className="text-gray-600">
          {project.budget.toLocaleString("es-ES")} €
        </span>
      </p>
      <p className="text-[16px] text-gray-400 mb-2">
        Profitability (100%):{" "}
        <span
          className={`text-[16px] ${
            project.profitability < 0
              ? "text-red-500 font-bold"
              : "text-gray-500 "
          } font-medium`}
        >
          {project.profitability.toLocaleString("es-ES")} €
        </span>
      </p>

      <div className="mt-2 h-4 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${progressBarColor} rounded-full`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex justify-between text-[14px] text-gray-500 mt-2">
        <span>Actual hours: {project.actualHours}</span>
        <span className={`${TextColor}`}>
          {project.soldHours} sold hours
          {project.profitability < 0 ? "over budget" : ""}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
