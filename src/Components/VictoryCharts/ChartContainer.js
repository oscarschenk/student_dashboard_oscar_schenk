import React from "react";
import VictoryChart from "./VictoryChart";
import FilterControls from "./FilterControls";

function ChartContainer(props) {
  return (
    <div className="shadow-xl mx-12  bg-white rounded flex flex-col justify-center items-center">
      <FilterControls />
      <VictoryChart />
    </div>
  );
}

export default ChartContainer;
