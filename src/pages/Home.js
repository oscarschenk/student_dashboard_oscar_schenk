import React from "react";
import ChartContainer from "../Components/VictoryCharts/ChartContainer";
import StudentContainer from "../Components/StudentGrid/StudentContainer";

function Home() {
  return (
    <div className="w-full 2xl:max-w-7xl">
      <ChartContainer />
      <StudentContainer />
    </div>
  );
}

export default Home;
