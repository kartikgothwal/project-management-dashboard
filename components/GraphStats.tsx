"use client";
import React from "react";
import BudgetChart from "./Budget";
import TotalRevenueChart from "./TotalRevenue";
import Card from "./Layout/Card";

const GraphStats = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-4 mb-8">
      <Card title="Total Revenue" className="lg:w-2/3 w-full h-[30rem] p-[3rem]">
        <div className="h-full">
          <TotalRevenueChart />
        </div>
      </Card>
      <Card title="Budget" className="lg:w-1/3 w-full h-[30rem] p-[3rem] flex flex-col">
        <div className="h-full">
          <BudgetChart />
        </div>
      </Card>
    </div>
  );
};

export default GraphStats;
