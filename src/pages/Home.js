import React from "react";
import ChartContainer from "../Components/VictoryCharts/ChartContainer";
import StudentListContainer from "../Components/StudentSidebar/StudentListContainer";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex h-full  flex-row">
        <StudentListContainer />
        <ChartContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
