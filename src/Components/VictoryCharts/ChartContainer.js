import React from "react";
import VictoryChart from "./VictoryChart";
import FilterControls from "./FilterControls";

function ChartContainer(props) {
  return (
    <div className="shadow-2xl mx-0 w-full h-full  bg-white  flex flex-col  items-center">
      <FilterControls />
      <VictoryChart />
    </div>
  );
}

export default ChartContainer;
