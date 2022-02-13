import React from "react";
import { useParams } from "react-router-dom";
import StudentList from "./StudentList";
import SingleStudentSidebar from "../SingleStudentInfo/SingleStudentSidebar";

function StudentListContainer() {
  const params = useParams();
  return (
    <div
      className={`flex ${
        params.firstName
          ? "h-40 flex-row overflow-x-scroll items-center  pt-0 -mt-2"
          : "h-screen flex-col  overflow-y-scroll "
      } scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-blue-200 rounded   bg-gray-700 shadow-2xl`}
    >
      {params.firstName ? <SingleStudentSidebar /> : <StudentList />}
    </div>
  );
}

export default StudentListContainer;
