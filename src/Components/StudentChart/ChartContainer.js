import React from "react";
import Recharts from "./Recharts";
import FilterControls from "./FilterControls";

function ChartContainer() {
  return (
    <div className="shadow-2xl mx-0 w-full h-full  bg-white  flex flex-col  items-center">
      <FilterControls />
      <Recharts />
    </div>
  );
}

export default ChartContainer;
