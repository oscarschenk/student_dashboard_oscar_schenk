import React, { useContext, Fragment } from "react";
import { AppContext } from "../AppContext";
import { Popover, Transition, Switch } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const solutions = [
  {
    name: "Scope",
    description:
      "This project was developed as the final assignment for the WINC Academy Front-End Development course. The assignment entailed creating a 'student dashboard' that contained a graph displaying the data provided; 56 ratings of the joy and difficulty the students experienced per assignment made.",
    href: "##",
    icon: IconOne,
  },
  {
    name: "Add-ons",
    description:
      "I redesigned the entire layout and styling of the project, going way beyond the stated requirements of the assignment. The app is fully responsive with three different layouts and incorporates a theme switcher.",
    href: "##",
    icon: IconTwo,
  },
  {
    name: "Future",
    description:
      "Apart from addressing bugs, this project will not be further updated. I'm currently studying Vue, Jest, TypeScript, Python and UX Design. My ambition is to start developing and improving real applications.",
    href: "##",
    icon: IconThree,
  },
];

export default function DropDown() {
  const { theme, toggleTheme } = useContext(AppContext);
  return (
    <div className="w-full pl-8 px-4 z-20 lg:max-w-lg">
      <Popover className="relative flex flex-col h-32 items-end">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? "" : "text-opacity-90"}
                text-white group bg-emerald-700 dark:bg-sky-600 px-2 py-1  rounded-md inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <span className="font-bold">Info</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-white group-hover:text-opacity-80 transition ease-in-out duration-150`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="z-20 bg-white relative rounded-lg shadow-2xl px-4 mt-3 h-screen sm:px-0">
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="flex flex-row rounded-t-lg bg-gray-700 py-3 justify-center gap-3 text-white">
                    <p className="font-bold">Switch Theme</p>
                    <Switch
                      checked={theme === "dark"}
                      onChange={toggleTheme}
                      className={`${
                        theme === "dark" ? "bg-yellow-500" : "bg-dark-sun-600"
                      }
          relative inline-flex flex-shrink-0 h-[24px] w-[52px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
                    >
                      <span
                        aria-hidden="true"
                        className={`${
                          theme === "dark" ? "translate-x-7" : "translate-x-0"
                        }
            pointer-events-none inline-block h-[20px] w-[20px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                      />
                    </Switch>
                  </div>

                  <div className="relative grid grid-cols-1 w-fit gap-8 bg-white p-5">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center p-2 -m-3 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                      >
                        <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white sm:h-12 sm:w-12">
                          <item.icon aria-hidden="true" />
                        </div>
                        <div className="ml-4">
                          <p className="text-sm font-medium text-gray-900">
                            {item.name}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.description}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="p-4 bg-gray-700 rounded-b-lg">
                    <a
                      href="https://github.com/oscarschenk/student_dashboard_oscar_schenk"
                      target="_blank"
                      rel="noreferrer"
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-800 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-md font-medium text-white">
                          GitHub
                        </span>
                      </span>
                      <span className="block text-sm text-white">
                        Check GitHub to take a look at the code
                      </span>
                    </a>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
}

function IconOne() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M24 11L35.2583 17.5V30.5L24 37L12.7417 30.5V17.5L24 11Z"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7417 19.8094V28.1906L24 32.3812L31.2584 28.1906V19.8094L24 15.6188L16.7417 19.8094Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20.7417 22.1196V25.882L24 27.7632L27.2584 25.882V22.1196L24 20.2384L20.7417 22.1196Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconTwo() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <path
        d="M28.0413 20L23.9998 13L19.9585 20M32.0828 27.0001L36.1242 34H28.0415M19.9585 34H11.8755L15.9171 27"
        stroke="#FB923C"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.804 30H29.1963L24.0001 21L18.804 30Z"
        stroke="#FDBA74"
        strokeWidth="2"
      />
    </svg>
  );
}

function IconThree() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="8" fill="#FFEDD5" />
      <rect x="13" y="32" width="2" height="4" fill="#FDBA74" />
      <rect x="17" y="28" width="2" height="8" fill="#FDBA74" />
      <rect x="21" y="24" width="2" height="12" fill="#FDBA74" />
      <rect x="25" y="20" width="2" height="16" fill="#FDBA74" />
      <rect x="29" y="16" width="2" height="20" fill="#FB923C" />
      <rect x="33" y="12" width="2" height="24" fill="#FB923C" />
    </svg>
  );
}
