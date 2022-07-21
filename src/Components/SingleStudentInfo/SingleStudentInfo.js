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
        className="bg-sky-100 h-full flex flex-col justify-center items-center shadow-2xl md:flex-row md:px-8 md:py-10 lg:w-full  lg:px-0 lg:py-0 lg:pt-0 lg:flex-col dark:bg-gray-100"
      >
        <div className="min-h-72 w-2/3 mb-4 h-80 py-8 items-center justify-center md:flex md:w-1/3 md:mb-0 md:h-72 lg:pt-12 lg:w-full lg:h-1/2 lg:mb-8 lg:px-8">
          <img
            className="border-4 border-white shadow-2xl rounded-2xl"
            src={`/studentPhotos/${student.photo}.jpg`}
            alt="student"
          />
        </div>
        <div className="py-8 bg-gradient-to-b from-gray-700 to-gray-600  text-white px-8 text-xs h-fit  shadow-2xl lg:-mt-4 md:rounded-lg lg:rounded-none md:ml-4 lg:ml-0 md:w-2/3 lg:w-full  ">
          <div className="flex flex-col items-start justify-center">
            <p className="text-lg lg:text-xl">
              {student.firstName} {student.lastName}
            </p>
            <p className="text-lg">Age: {student.age}</p>
          </div>
          <p className="text-xs lg:text-md leading-tight pt-2">{student.bio}</p>
          <div className="text-white text-sm mt-4 flex flex-row justify-start gap-2">
            <Link to={"/"}>
              <button className="bg-dark-sun-600 px-2 py-1 hidden lg:block rounded shadow-lg text-white font-bold hover:bg-dark-sun-500 dark:bg-sky-600 hover:dark:bg-sky-500">
                Overview
              </button>
            </Link>
            <button className="bg-dark-sun-600 px-2 py-1 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500 dark:bg-sky-600 hover:dark:bg-sky-500">
              Call
            </button>
            <a
              className="hover:underline"
              target="_blank"
              href={`mailto:${student.email}`}
              rel="noreferrer"
            >
              <button className="bg-dark-sun-600 px-2 py-1 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500 dark:bg-sky-600 hover:dark:bg-sky-500">
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
