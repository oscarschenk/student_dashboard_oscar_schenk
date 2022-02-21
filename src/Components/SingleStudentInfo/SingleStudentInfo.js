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
        className="bg-blue-200  h-full  flex justify-center pt-8 md:pt-0 items-center flex-col shadow-2xl"
      >
        <div className="w-fit px-8">
          <img
            className="h-fit border-4 border-white shadow-2xl rounded-2xl"
            src={student.photo}
            alt="student"
          ></img>
        </div>
        <div className=" py-8 mt-8 bg-blue-300 text-white px-8 text-xs  shadow-2xl">
          <p>
            Name: {student.firstName} {student.lastName}
          </p>
          <p>Age: {student.age}</p>
          <p>Phone: {student.phone}</p>
          <p>
            E-mail:{" "}
            <a
              className="hover:underline"
              target="_blank"
              href={`mailto:${student.email}`}
              rel="noreferrer"
            >
              {student.email}
            </a>
          </p>
          <p>{student.bio}</p>
          <div className="text-white text-sm mt-4 hidden md:block">
            <Link to={"/"}>
              <button className="bg-orange-500 px-3 py-2 rounded shadow-lg text-white font-bold hover:bg-orange-400">
                Back to Overview
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  });
  return singleStudentCard;
}

export default SingleStudentInfo;
