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
          ? "flex-row pb-4 pt-2 overflow-x-scroll overflow-y-hidden bg-gradient-to-b from-gray-800 to-gray-700"
          : "flex-col overflow-y-scroll bg-gradient-to-b from-gray-800 to-gray-700"
      } scrollbar-thin scrollbar-track-gray-700 scrollbar-thumb-sky-200  shadow-md`}
    >
      {firstName ? <StudentListTopbar /> : <StudentListSidebar />}
    </div>
  );
}

export default StudentListContainer;
