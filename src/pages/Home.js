import React from "react";
import ChartContainer from "../Components/StudentChart/ChartContainer";
import StudentListContainer from "../Components/StudentSidebar/StudentListContainer";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex lg:h-full md:h-screen flex-row">
        <StudentListContainer />
        <ChartContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
