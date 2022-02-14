import React from "react";
import { useParams } from "react-router-dom";
import StudentList from "./StudentList";
import SingleStudentSidebar from "../SingleStudentInfo/SingleStudentSidebar";

function StudentListContainer() {
  const params = useParams();
  const screenWidth = window.innerWidth;
  return (
    <div
      className={`flex ${
        params.firstName
          ? "h-fit flex-row overflow-x-scroll overflow-y-hidden  items-center pb-2 2xl:pb-0"
          : "h-screen flex-col w-fit  overflow-y-scroll "
      } scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-blue-200 rounded   bg-gray-700 shadow-2xl`}
    >
      {params.firstName ? <SingleStudentSidebar /> : <StudentList />}
    </div>
  );
}

export default StudentListContainer;
