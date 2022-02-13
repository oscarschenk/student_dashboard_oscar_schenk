import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { Switch, Disclosure, Transition } from "@headlessui/react";

function SingleStudentSidebar() {
  const { studentData, filterToggle, studentNameFilterArray, emptyFilterList } =
    useContext(AppContext);
  const params = useParams();
  const studentAvatar = studentData.map((student) => {
    return (
      <div key={student.id}>
        <div className="w-28 ml-2 my-4 flex items-center justify-center ">
          <Link to={`/student/${student.firstName}`} onClick={emptyFilterList}>
            <img
              className={`h-24 border-4  ${
                student.firstName === params.firstName
                  ? "border-green-300"
                  : "border-orange-500"
              } shadow-2xl rounded-full hover:scale-105`}
              src={student.photo}
              alt="Student"
            ></img>
          </Link>
        </div>
      </div>
    );
  });
  return studentAvatar;
}

export default SingleStudentSidebar;
