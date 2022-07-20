import React from "react";

function Footer() {
  return (
    <div className="bg-teal-900 dark:bg-gray-700 text-white py-4 px-8 text-xs text-center md:px-0 md:text-md md:text-center md:pl-8 lg:text-md lg:text-center xl:text-left xl:text-lg">
      <p>
        Developed as the Final Project for the Winc Academy Front-End
        Development Course by Oscar Schenk | Check{" "}
        <a
          href="https://github.com/oscarschenk/student_dashboard_oscar_schenk"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
        to take a look at the code
      </p>
    </div>
  );
}

export default Footer;
