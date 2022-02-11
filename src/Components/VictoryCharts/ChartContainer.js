import React from "react";
import VictoryChart from "./VictoryChart";
import FilterControls from "./FilterControls";

function ChartContainer(props) {
  return (
    <div className="shadow-xl 2xl:-mx-24 mx-24  bg-white rounded flex flex-col justify-center items-center">
      <FilterControls />
      <VictoryChart />
    </div>
  );
}

export default ChartContainer;
