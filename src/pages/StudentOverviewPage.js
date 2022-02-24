import React from "react";
import StudentListContainer from "../Components/StudentList/StudentListContainer";
import ChartContainer from "../Components/StudentChart/ChartContainer";
import Footer from "../Components/Footer";
import SingleStudentInfo from "../Components/SingleStudentInfo/SingleStudentInfo";
import SingleStudentTable from "../Components/SingleStudentInfo/SingleStudentTable";

function StudentOverviewPage() {
  return (
    <div className="w-full lg:h-screen h-full">
      <div className="flex h-full flex-col">
        <div className="h-fit">
          <StudentListContainer />
        </div>
        <div className="flex h-full flex-col lg:flex-row">
          <div className=" w-full lg:w-3/12">
            <SingleStudentInfo />
          </div>
          <div className="hidden md:block w-full h-full lg:w-9/12">
            <ChartContainer />
          </div>
          <div className="block md:hidden">
            <SingleStudentTable />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default StudentOverviewPage;
