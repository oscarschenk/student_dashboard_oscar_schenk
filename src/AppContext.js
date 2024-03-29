import React, { useState, useEffect, createContext } from "react";
import { ratingData } from "./Utils/studentData";

const AppContext = createContext();

function AppContextProvider(props) {
  const [theme, setTheme] = useState("");
  const [chartData, setChartData] = useState(ratingData);
  const [filteredChartData, setFilteredChartData] = useState([]);
  const [studentData, setStudentData] = useState([]);
  const [difficultyRatingToggle, setDifficultyRatingToggle] = useState(true);
  const [funRatingToggle, setFunRatingToggle] = useState(true);
  const [chartTypeToggle, setChartTypeToggle] = useState("line");
  const [studentNameFilterArray, setStudentNameFilterArray] = useState([]);
  const [screenSize, setScreenSize] = useState(1024);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    function handleResize() {
      setScreenSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://62d7f570908831393587e674.mockapi.io/personal_data"
      );
      const json = await data.json();
      setStudentData(json);
    };
    fetchData().catch(console.error);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
  };

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
        theme,
        toggleTheme,
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
        screenSize,
        isOpen,
        setIsOpen,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContextProvider, AppContext };
