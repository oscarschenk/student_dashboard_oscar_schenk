import React from "react";
import { useParams } from "react-router-dom";
import StudentListSidebar from "./StudentListSidebar";
import StudentListTopbar from "./StudentListTopbar";

function StudentListContainer() {
  const { firstName } = useParams();
  return (
    <div
      className={`flex ${
        firstName
          ? "h-fit flex-row overflow-x-scroll overflow-y-hidden  items-center pb-2 2xl:pb-0"
          : "h-screen flex-col w-fit  overflow-y-scroll "
      } scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-sky-200 rounded   bg-gray-700 shadow-md`}
    >
      {firstName ? <StudentListTopbar /> : <StudentListSidebar />}
    </div>
  );
}

export default StudentListContainer;
