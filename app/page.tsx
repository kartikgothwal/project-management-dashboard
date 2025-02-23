"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import StatsSections from "@/components/StatsSections";
import GraphStats from "@/components/GraphStats";
import TeamMood from "@/components/TeamMood";
import Card from "@/components/Layout/Card";
import ProjectDashboard from "@/components/ProjectDashboard";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 px-12 mt-8">
        <div className="lg:col-span-3 space-y-4">
          <StatsSections />
          <GraphStats />
        </div>
        <div className="lg:col-span-1 space-y-4">
          <Card title="Team Mood" className="h-full">
            <TeamMood />
          </Card>
        </div>
      </div>
      <ProjectDashboard />
    </div>
  );
};

export default AppLayout;
