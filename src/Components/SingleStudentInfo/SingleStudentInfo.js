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
        className="bg-sky-100 h-full flex flex-col justify-center items-center shadow-2xl md:px-8 md:py-4 lg:px-0 lg:py-0 lg:pt-0 lg:flex-col md:flex-row "
      >
        <div className="w-2/3 py-8 md:w-1/2 lg:pt-12 lg:w-full lg:px-8">
          <img
            className="border-4 border-white shadow-2xl rounded-2xl"
            src={student.photo}
            alt="student"
          ></img>
        </div>
        <div className=" py-8 lg:-mt-4 md:rounded-lg lg:rounded-none w-full md:ml-4 lg:ml-0 md:w-2/3 lg:w-full  bg-gray-700  text-white px-8 text-xs h-fit  shadow-2xl">
          <div className="flex flex-col items-start justify-center">
            <p className="text-xl lg:text-3xl">
              {student.firstName} {student.lastName}
            </p>
            <p className="text-xl">Age: {student.age}</p>
          </div>
          <p className="text-xs lg:text-md leading-tight pt-2">{student.bio}</p>
          <div className="text-white text-sm mt-4 flex flex-row justify-start gap-2">
            <Link to={"/"}>
              <button className="bg-dark-sun-600 px-2 py-1 hidden md:block rounded shadow-lg text-white font-bold hover:bg-dark-sun-500">
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
              <button className="bg-dark-sun-600 px-2 py-1 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500">
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
