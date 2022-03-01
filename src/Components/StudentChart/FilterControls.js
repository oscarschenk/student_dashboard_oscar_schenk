import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";

function FilterControls() {
  const {
    toggleDifficultyRating,
    toggleFunRating,
    difficultyRatingToggle,
    funRatingToggle,
    toggleChartType,
    chartTypeToggle,
    studentNameFilterArray,
  } = useContext(AppContext);

  let { firstName } = useParams();

  // Sort of a workaround to get a space after every student displayed
  const listOfFilteredStudentNames = studentNameFilterArray.map(
    (item) => ` ${item}`
  );

  return (
    <div className="mt-8 mb-4 w-full flex flex-col">
      <h1
        className={`lg:text-4xl font-sans text-gray-800 font-bold flex justify-center ${
          firstName ? "text-2xl" : ""
        }`}
      >
        {firstName
          ? `${firstName}'s Dashboard`
          : "Dashboard Student Survey Results 2021"}
      </h1>
      <div className="filters w-full flex flex-row justify-center mt-2">
        <button
          onClick={() => toggleDifficultyRating()}
          className="bg-dark-sun-600 px-3 py-2 rounded shadow-lg text-white font-bold hover:bg-dark-sun-500 dark:bg-sky-600 hover:dark:bg-sky-500"
        >
          {difficultyRatingToggle
            ? "Difficulty Rating | ON"
            : "Difficulty Rating | OFF"}
        </button>
        <button
          onClick={() => toggleFunRating()}
          className="bg-emerald-700 px-3 py-2 rounded shadow-lg text-white ml-2 font-bold hover:bg-emerald-600 dark:bg-yellow-500 dark:hover:bg-yellow-400"
        >
          {funRatingToggle ? "Fun Rating | ON" : "Fun Rating | OFF"}
        </button>
        <button
          onClick={() => toggleChartType()}
          className="bg-gray-700 px-3 py-2 rounded shadow-lg text-white ml-2 font-bold hover:bg-gray-600"
        >
          {chartTypeToggle === "bar" ? "Back to Line Chart" : "Show Bar Chart"}
        </button>
      </div>
      <div className="mt-2 flex justify-center text-center">
        {firstName
          ? null
          : studentNameFilterArray.length === 1
          ? `Currently showing rating data of: ${listOfFilteredStudentNames}`
          : studentNameFilterArray.length > 1
          ? `Currently showing average rating data of: ${listOfFilteredStudentNames}`
          : "Currently showing average data of all students"}
      </div>
    </div>
  );
}

export default FilterControls;
