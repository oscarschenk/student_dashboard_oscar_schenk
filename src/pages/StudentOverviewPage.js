import React from "react";
import { useParams } from "react-router-dom";
import SingleStudentInfo from "../Components/SingleStudentInfo/SingleStudentInfo";
import SingleStudentTable from "../Components/SingleStudentInfo/SingleStudentTable";
import ChartContainer from "../Components/VictoryCharts/ChartContainer";
import Footer from "../Components/Footer";

function StudentOverviewPage() {
  const params = useParams();
  return (
    <div className="flex flex-col  2xl:w-2/3">
      <SingleStudentInfo />
      <ChartContainer />
      <SingleStudentTable />
    </div>
  );
}

export default StudentOverviewPage;
