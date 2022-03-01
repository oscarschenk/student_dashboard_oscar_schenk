import React from "react";
import Recharts from "./Recharts";
import FilterControls from "./FilterControls";
import DropDown from "../DropDown";

function ChartContainer() {
  return (
    <div className="shadow-lg w-full h-full min-h-fit  bg-white flex flex-col items-center">
      <div className="absolute md:right-4 md:pt-4 2xl:right-20 2xl:pt-5">
        <DropDown />
      </div>
      <FilterControls />
      <Recharts />
    </div>
  );
}

export default ChartContainer;
