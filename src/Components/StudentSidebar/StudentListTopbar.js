import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function StudentListTopbar() {
  const { studentData, emptyFilterList } = useContext(AppContext);
  const { firstName } = useParams();
  const studentAvatar = studentData.map((student) => {
    return (
      <div key={student.id}>
        <div className="w-28 flex items-center justify-center ">
          <Link to={`/student/${student.firstName}`} onClick={emptyFilterList}>
            <img
              className={`h-24 border-4  ${
                student.firstName === firstName
                  ? "border-emerald-500 dark:border-yellow-500"
                  : "border-dark-sun-600 dark:border-sky-600"
              } shadow-2xl rounded-full hover:scale-105`}
              src={`/studentPhotos/${student.photo}.jpg`}
              alt="Student"
            ></img>
          </Link>
        </div>
      </div>
    );
  });
  return studentAvatar;
}

export default StudentListTopbar;
