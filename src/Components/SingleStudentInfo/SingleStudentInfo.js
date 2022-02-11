import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";

function SingleStudentInfo() {
  const params = useParams();
  const { studentData } = useContext(AppContext);
  const singleStudentPersonalData = studentData.filter((student) => {
    return student.firstName === params.firstName;
  });
  const singleStudentCard = singleStudentPersonalData.map((student) => {
    return (
      <div
        key={student.id}
        className="my-8 mx-24   flex justify-center items-center"
      >
        <div>
          <img
            className="h-48 border-4 border-white shadow-2xl rounded-full"
            src={student.photo}
          ></img>
        </div>
        <div className="bg-blue-500 text-white p-8 rounded-lg ml-8 shadow-2xl">
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
            >
              {student.email}
            </a>
          </p>
        </div>
      </div>
    );
  });
  return singleStudentCard;
}

export default SingleStudentInfo;
