import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { Link } from "react-router-dom";
import { Switch, Disclosure, Transition } from "@headlessui/react";

function StudentListSidebar() {
  const { studentData, filterToggle, studentNameFilterArray, emptyFilterList } =
    useContext(AppContext);

  const studentAvatar = studentData.map((student) => {
    const imgBorderColor = studentNameFilterArray.includes(student.firstName)
      ? "border-emerald-600 dark:border-yellow-500"
      : "border-dark-sun-600 dark:border-sky-600";

    return (
      <div
        className="py-1 border-t-2 border-gray-600 w-full items-center bg-gradient-to-r from-gray-800 to-gray-700 hover:bg-gray-800 d"
        key={student.id}
      >
        <Disclosure>
          <div className="flex flex-col xl:pl-8 xl:pr-12 lg:pl-12 lg:pr-16">
            <div className="flex flex-row justify-center items-center">
              <Disclosure.Button className="py-2 text-white flex w-screen flex-row justify-center items-center lg:w-fit">
                <div className="w-20">
                  <img
                    className={`h-20  border-4 shadow-2xl rounded-full hover:scale-105 ${imgBorderColor}`}
                    src={`/studentPhotos/${student.photo}.jpg`}
                    alt="Student"
                  ></img>
                </div>
                <p className="text-md hidden lg:block mx-2 w-36 text-left ">{`${student.firstName} ${student.lastName}`}</p>
              </Disclosure.Button>

              <div>
                <Switch
                  checked={studentNameFilterArray.includes(student.firstName)}
                  onChange={() => filterToggle(student.firstName)}
                  className={`${
                    studentNameFilterArray.includes(student.firstName)
                      ? "bg-emerald-700 dark:bg-yellow-500"
                      : "bg-dark-sun-600 dark:bg-sky-600"
                  } 
          relative inline-flex flex-shrink-0 h-[24px] w-[52px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                >
                  <span
                    aria-hidden="true"
                    className={`${
                      studentNameFilterArray.includes(student.firstName)
                        ? "translate-x-7"
                        : "translate-x-0"
                    }
            pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
              </div>
            </div>
            <Transition
              enter="transition duration-500 ease-out"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition duration-575 ease-out"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
            >
              <Disclosure.Panel className="text-white w-full text-s pt-2 mt-2 border-t border-gray-200">
                <div className="flex flex-col items-start lg:flex-row lg:justify-start lg:gap-3">
                  <Link
                    to={`/student/${student.firstName}`}
                    onClick={emptyFilterList}
                  >
                    <button className="bg-dark-sun-600 px-2 my-2 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500 dark:bg-sky-600 hover:dark:bg-sky-500">
                      Info
                    </button>
                  </Link>
                  <button className="bg-dark-sun-600 px-2 my-2 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500 dark:bg-sky-600 hover:dark:bg-sky-500">
                    Call
                  </button>
                  <a
                    className="hover:underline"
                    target="_blank"
                    href={`mailto:${student.email}`}
                    rel="noreferrer"
                  >
                    <button className="bg-dark-sun-600 px-2 my-2 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500 dark:bg-sky-600 hover:dark:bg-sky-500">
                      Message
                    </button>
                  </a>
                </div>
              </Disclosure.Panel>
            </Transition>
          </div>
        </Disclosure>
      </div>
    );
  });
  return studentAvatar;
}

export default StudentListSidebar;
