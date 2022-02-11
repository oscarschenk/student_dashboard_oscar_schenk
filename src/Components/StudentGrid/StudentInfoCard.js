import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";

function StudentInfoCard() {
  const { studentData, filterToggle, studentNameFilterArray, emptyFilterList } =
    useContext(AppContext);
  const studentAvatar = studentData.map((student) => {
    return (
      <div
        className="flex flex-col justify-center items-center bg-green-100 rounded-lg border-4 border-green-200"
        key={student.id}
      >
        <button
          className="bg-orange-500 px-3 py-2 rounded shadow-lg text-white font-bold hover:bg-orange-400"
          value={student.firstName}
          onClick={filterToggle}
        >
          {studentNameFilterArray.includes(student.firstName)
            ? "Filter | ON"
            : "Filter | OFF"}
        </button>

        <img
          className="h-1/3 my-4 border-4 border-white shadow-2xl rounded-full hover:scale-110"
          src={student.photo}
          alt="Student"
        ></img>
        <Link
          className="flex items-center flex-col"
          to={`/student/${student.firstName}`}
          onClick={emptyFilterList}
        >
          <p className="text-xl text-gray-800 mb-4 font-bold">{`${student.firstName} ${student.lastName}`}</p>

          <button className="bg-orange-500 px-3 py-2 rounded shadow-lg text-white font-bold hover:bg-orange-400">
            Student Info
          </button>
        </Link>
      </div>
    );
  });
  return studentAvatar;
}

export default StudentInfoCard;
