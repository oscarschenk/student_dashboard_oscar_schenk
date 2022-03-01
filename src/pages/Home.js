import React from "react";
import ChartContainer from "../Components/StudentChart/ChartContainer";
import StudentListContainer from "../Components/StudentSidebar/StudentListContainer";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="w-full h-full">
      <div className="flex flex-row lg:h-full md:h-screen">
        <StudentListContainer />
        <ChartContainer />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
