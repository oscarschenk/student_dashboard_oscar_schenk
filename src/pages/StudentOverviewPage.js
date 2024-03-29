import React from "react";
import StudentListContainer from "../Components/StudentSidebar/StudentListContainer";
import ChartContainer from "../Components/StudentChart/ChartContainer";
import Footer from "../Components/Footer";
import SingleStudentInfo from "../Components/SingleStudentInfo/SingleStudentInfo";
import SingleStudentTable from "../Components/SingleStudentInfo/SingleStudentTable";

function StudentOverviewPage() {
  return (
    <div className="w-full h-full  lg:h-full">
      <div className="flex min-h-screen h-fit flex-col md:h-full">
        <div className="h-fit">
          <StudentListContainer />
        </div>
        <div className="flex h-full flex-col lg:flex-row">
          <div className=" w-full lg:w-3/12">
            <SingleStudentInfo />
          </div>
          <div className="hidden h-full md:block lg:w-9/12">
            <ChartContainer />
          </div>
          <div className="block h-fit md:hidden">
            <SingleStudentTable />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default StudentOverviewPage;
