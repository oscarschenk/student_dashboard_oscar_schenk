import React from "react";
import Recharts from "./Recharts";
import FilterControls from "./FilterControls";
import PopUp from "../PopUp";

function ChartContainer() {
  return (
    <div className="shadow-lg w-full h-full min-h-fit  bg-white flex flex-col items-center">
      <div className="absolute right-4 pt-2">
        <PopUp />
      </div>
      <FilterControls />
      <Recharts />
    </div>
  );
}

export default ChartContainer;
