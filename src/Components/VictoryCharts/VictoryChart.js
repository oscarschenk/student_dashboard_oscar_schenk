import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useParams } from "react-router-dom";
import BarChart from "./Charts/BarChart";
import LineChart from "./Charts/LineChart";

function VictoryChart(props) {
  const { chartData, filteredChartData, chartTypeToggle } =
    useContext(AppContext);

  const screenWidth = window.innerWidth;

  let { firstName } = useParams();

  const singleStudentPageChartFilter = chartData.filter(
    (item) => item.studentName === firstName
  );

  let dataToProcess = chartData;

  filteredChartData.length > 0
    ? (dataToProcess = filteredChartData)
    : (dataToProcess = chartData);

  const listOfAssignments = [
    ...new Set(
      dataToProcess.map((item) => {
        return item.assignmentName;
      })
    ),
  ];

  // This is a bit of a long function. Basically it takes all the unique assignment names that we generated just above here and for each item it pushes a value for funRating and difficultyRating to their respective arrays. These both get averaged and rounded and we return an object containing the averaged assignmentName, funRating and difficultyRating for anything that is passed to this function. This is used to average all data for the app before sending it to the VictoryChart.

  const dataToDisplay = listOfAssignments.map((singleAssignmentName) => {
    const reducer = (previousValue, currentValue) =>
      previousValue + currentValue;
    const funRating = [];
    const difficultyRating = [];
    dataToProcess
      .filter((item) => {
        return item.assignmentName === singleAssignmentName;
      })
      .map((item) => {
        return (
          funRating.push(item.funRating) &&
          difficultyRating.push(item.difficultyRating)
        );
      });
    const funRatingAverage = Math.round(
      funRating.reduce(reducer) / funRating.length
    );
    const difficultyRatingAverage = Math.round(
      difficultyRating.reduce(reducer) / difficultyRating.length
    );
    return {
      assignmentName: singleAssignmentName,
      funRating: funRatingAverage,
      difficultyRating: difficultyRatingAverage,
    };
  });
  return (
    <>
      {chartTypeToggle === "bar" ? (
        <BarChart
          data={firstName ? singleStudentPageChartFilter : dataToDisplay}
          screenWidth={screenWidth}
        />
      ) : (
        <LineChart
          data={firstName ? singleStudentPageChartFilter : dataToDisplay}
          screenWidth={screenWidth}
        />
      )}
    </>
  );
}

export default VictoryChart;
