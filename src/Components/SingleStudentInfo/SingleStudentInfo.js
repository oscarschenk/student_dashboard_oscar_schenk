import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";

function SingleStudentInfo() {
  const { firstName } = useParams();
  const { studentData } = useContext(AppContext);
  const singleStudentPersonalData = studentData.filter((student) => {
    return student.firstName === firstName;
  });
  const singleStudentCard = singleStudentPersonalData.map((student) => {
    return (
      <div
        id="single-student-overview"
        key={student.id}
        className="bg-sky-100  h-full  flex justify-center pt-8 md:pt-0 items-center flex-col shadow-2xl"
      >
        <div className="w-fit px-8">
          <img
            className="h-fit border-4 border-white shadow-2xl rounded-2xl"
            src={student.photo}
            alt="student"
          ></img>
        </div>
        <div className=" py-8 mt-8 bg-gray-700  text-white px-8 text-xs  shadow-2xl">
          <div className="flex flex-col items-start justify-center">
            <p className="text-3xl">
              {student.firstName} {student.lastName}
            </p>
            <p className="text-xl">Age: {student.age}</p>
          </div>
          <p className="text-base leading-tight pt-2">{student.bio}</p>
          <div className="text-white text-sm mt-4 hidden md:flex md:flex-row md:justify-start md:gap-2">
            <Link to={"/"}>
              <button className="bg-dark-sun-600 px-2 py-1 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500">
                Overview
              </button>
            </Link>
            <button className="bg-dark-sun-600 px-2 py-1 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500">
              Call
            </button>
            <a
              className="hover:underline"
              target="_blank"
              href={`mailto:${student.email}`}
              rel="noreferrer"
            >
              <button className="bg-dark-sun-600 px-3 py-1 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500">
                Message
              </button>
            </a>
          </div>
        </div>
      </div>
    );
  });
  return singleStudentCard;
}

export default SingleStudentInfo;
