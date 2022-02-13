import React, { useState } from "react";
import { ratingData, personalData } from "./Utils/studentData";

const AppContext = React.createContext();

function AppContextProvider(props) {
  const [chartData, setChartData] = useState(ratingData);
  const [filteredChartData, setFilteredChartData] = useState([]);
  const [studentData, setStudentData] = useState(personalData);
  const [difficultyRatingToggle, setDifficultyRatingToggle] = useState(true);
  const [funRatingToggle, setFunRatingToggle] = useState(true);
  const [chartTypeToggle, setChartTypeToggle] = useState("bar");
  const [studentNameFilterArray, setStudentNameFilterArray] = useState([]);

  const toggleDifficultyRating = () => {
    if (difficultyRatingToggle === true && funRatingToggle === false) {
      setDifficultyRatingToggle(false);
      setFunRatingToggle(true);
    } else setDifficultyRatingToggle(!difficultyRatingToggle);
  };

  const toggleFunRating = () => {
    if (funRatingToggle === true && difficultyRatingToggle === false) {
      setFunRatingToggle(false);
      setDifficultyRatingToggle(true);
    } else setFunRatingToggle(!funRatingToggle);
  };

  const toggleChartType = () => {
    setChartTypeToggle((prevType) => (prevType === "bar" ? "line" : "bar"));
  };

  const filterToggle = (value) => {
    studentNameFilterArray.includes(value)
      ? setStudentNameFilterArray((prevArray) =>
          prevArray.filter((name) => name !== value)
        )
      : setStudentNameFilterArray((prevArray) => [...prevArray, value]);
    studentDataToAverageArray(value);
  };

  const studentDataToAverageArray = (value) => {
    studentNameFilterArray.includes(value)
      ? setFilteredChartData(
          filteredChartData.filter((item) => item.studentName !== value)
        )
      : setFilteredChartData((prevArray) => {
          const singleStudentData = chartData.filter(
            (student) => student.studentName === value
          );
          return [...prevArray, ...singleStudentData];
        });
  };

  const emptyFilterList = () => {
    setFilteredChartData([]);
    setStudentNameFilterArray([]);
  };

  return (
    <AppContext.Provider
      value={{
        chartData,
        setChartData,
        filteredChartData,
        setFilteredChartData,
        studentData,
        setStudentData,
        studentNameFilterArray,
        difficultyRatingToggle,
        setDifficultyRatingToggle,
        funRatingToggle,
        setFunRatingToggle,
        chartTypeToggle,
        toggleChartType,
        toggleDifficultyRating,
        toggleFunRating,
        filterToggle,
        emptyFilterList,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
