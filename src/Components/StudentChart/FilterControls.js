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
  let currentStudent = firstName;
  const listOfFilteredStudentNames = studentNameFilterArray.map(
    (item) => ` ${item}`
  );

  return (
    <div>
      <div className="mt-8 w-full flex flex-col">
        <h1 className="text-4xl flex justify-center ">
          {currentStudent
            ? `${currentStudent}'s Dashboard`
            : "Dashboard Student Survey Results 2021"}
        </h1>
        <div className="filters w-full flex flex-row justify-center mt-2">
          <button
            onClick={() => toggleDifficultyRating()}
            className="bg-orange-500 px-3 py-2 rounded shadow-lg text-white font-bold hover:bg-orange-400"
          >
            {difficultyRatingToggle
              ? "Difficulty Rating | ON"
              : "Difficulty Rating | OFF"}
          </button>
          <button
            onClick={() => toggleFunRating()}
            className="bg-green-500 px-3 py-2 rounded shadow-lg text-white ml-2 font-bold hover:bg-green-400"
          >
            {funRatingToggle ? "Fun Rating | ON" : "Fun Rating | OFF"}
          </button>
          <button
            onClick={() => toggleChartType()}
            className="bg-blue-400 px-3 py-2 rounded shadow-lg text-white ml-2 font-bold hover:bg-red-400"
          >
            {chartTypeToggle === "bar"
              ? "Show Line Chart"
              : "Back To Bar Chart"}
          </button>
        </div>
        <div className="mt-2 flex justify-center text-center">
          {currentStudent
            ? null
            : studentNameFilterArray.length === 1
            ? `Currently showing rating data of: ${listOfFilteredStudentNames}`
            : studentNameFilterArray.length > 1
            ? `Currently showing average rating data of: ${listOfFilteredStudentNames}`
            : "Currently showing average data of all students"}
        </div>
      </div>
    </div>
  );
}

export default FilterControls;
