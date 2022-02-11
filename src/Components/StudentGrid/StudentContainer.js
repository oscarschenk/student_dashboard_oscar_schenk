import React from "react";
import App from "../../App";
import StudentInfoCard from "./StudentInfoCard";

function StudentContainer() {
  return (
    <div className="2xl:-mx-24 mx-24 mt-12 py-12 px-12 bg-white rounded shadow-xl grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
      <StudentInfoCard />
    </div>
  );
}

export default StudentContainer;
