import React from "react";
import StudentListContainer from "../Components/StudentList/StudentListContainer";
import ChartContainer from "../Components/StudentChart/ChartContainer";
import Footer from "../Components/Footer";
import SingleStudentInfo from "../Components/SingleStudentInfo/SingleStudentInfo";

function StudentOverviewPage() {
  return (
    <div className="w-full flex-col">
      <div className="flex h-screen md:h-screen flex-col w-full ">
        <StudentListContainer />
        <div className="flex flex-row flex-grow sm:w-full">
          <div className="md:w-3/12 w-full h-full">
            <SingleStudentInfo />
          </div>
          <div className="hidden md:block w-9/12">
            <ChartContainer />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentOverviewPage;
