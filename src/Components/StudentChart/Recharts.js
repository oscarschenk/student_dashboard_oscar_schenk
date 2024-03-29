import React, { useContext } from "react";
import { AppContext } from "../../AppContext";
import { useParams } from "react-router-dom";
import BarChartRechart from "./Charts/BarChartRechart";
import LineChartRechart from "./Charts/LineChartRechart";

function Recharts() {
  const { chartData, filteredChartData, chartTypeToggle } =
    useContext(AppContext);

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

  const reducer = (previousValue, currentValue) => previousValue + currentValue;

  // This is a bit of a long one. Basically it takes all the unique assignment names that we generated just above here and for each item it pushes a value for funRating and difficultyRating to their respective arrays. These both get averaged and rounded and we return an object containing the averaged assignmentName, funRating and difficultyRating for whatever 'dataToProcess' is set to. This is used to average all data for the app before sending it to Recharts. Would love to get pointers on how to do this properly and more readable.

  const dataToDisplay = listOfAssignments.map((singleAssignmentName) => {
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
        <BarChartRechart
          data={firstName ? singleStudentPageChartFilter : dataToDisplay}
        />
      ) : (
        <LineChartRechart
          data={firstName ? singleStudentPageChartFilter : dataToDisplay}
        />
      )}
    </>
  );
}

export default Recharts;
