import React from "react";
import Recharts from "./Recharts";
import FilterControls from "./FilterControls";
import ThemeToggle from "../ThemeToggle";

function ChartContainer() {
  return (
    <div className="shadow-lg w-full h-full min-h-fit  bg-white flex flex-col items-center dark:bg-slate-200">
      <div className="absolute right-4 pt-2">
        <ThemeToggle />
      </div>
      <FilterControls />
      <Recharts />
    </div>
  );
}

export default ChartContainer;
