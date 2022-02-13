import React from "react";
import { useParams } from "react-router-dom";
import StudentListContainer from "../Components/StudentSidebar/StudentListContainer";
import ChartContainer from "../Components/VictoryCharts/ChartContainer";
import Footer from "../Components/Footer";
import SingleStudentInfo from "../Components/SingleStudentInfo/SingleStudentInfo";

function StudentOverviewPage() {
  const params = useParams();
  return (
    <div className="w-full h-screen">
      <div className="flex h-screen flex-col w-full ">
        <StudentListContainer />
        <div className="flex flex-row h-full">
          <SingleStudentInfo />
          <ChartContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentOverviewPage;
