import React from "react";
import ChartContainer from "../Components/VictoryCharts/ChartContainer";
import StudentContainer from "../Components/StudentGrid/StudentContainer";

function Home() {
  return (
    <div className="flex flex-col  2xl:w-2/3">
      <ChartContainer />
      <StudentContainer />
    </div>
  );
}

export default Home;
