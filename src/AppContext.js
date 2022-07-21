import React, { useState, useEffect, createContext } from "react";
import { ratingData } from "./Utils/studentData";

// import female_1 from "./studentPhotos/female_1.jpg";
// import female_2 from "./studentPhotos/female_2.jpg";
// import female_3 from "./studentPhotos/female_3.jpg";
// import female_4 from "./studentPhotos/female_4.jpg";
// import female_5 from "./studentPhotos/female_5.jpg";
// import female_6 from "./studentPhotos/female_6.jpg";
// import female_7 from "./studentPhotos/female_7.jpg";
// import female_8 from "./studentPhotos/female_8.jpg";
// import female_9 from "./studentPhotos/female_9.jpg";
// import male_1 from "./studentPhotos/male_1.jpg";
// import male_2 from "./studentPhotos/male_2.jpg";
// import male_3 from "./studentPhotos/male_3.jpg";
// import male_4 from "./studentPhotos/male_4.jpg";
// import male_5 from "./studentPhotos/male_5.jpg";
// import male_6 from "./studentPhotos/male_6.jpg";

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
    setScreenSize(window.innerWidth);
  }, []);

  useEffect(() => {
    // declare the async data fetching function
    const fetchData = async () => {
      // get the data from the api
      const data = await fetch(
        "https://62d7f570908831393587e674.mockapi.io/personal_data"
      );
      // convert the data to json
      const json = await data.json();
      console.log(json);

      // set state with the result
      setStudentData(json);
    };

    // call the function
    fetchData()
      // make sure to catch any error
      .catch(console.error);
  }, []);

  // console.log(JSON.stringify(personalData));

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
