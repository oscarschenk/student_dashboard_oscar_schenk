import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";

const BarChart = (props) => {
  const { difficultyRatingToggle, funRatingToggle } = useContext(AppContext);
  console.log(props.screenWidth);
  return (
    <>
      <VictoryChart
        domainPadding={{ x: [10, 5], y: 1 }}
        padding={{ top: 10, bottom: 50, right: 35, left: 30 }}
      >
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 5, padding: 30 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 5, padding: 5 },
          }}
        />
        <VictoryAxis
          tickLabelComponent={<VictoryLabel textAnchor="start" />}
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 3, padding: 30 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 3, padding: 2, angle: 55 },
          }}
          fixLabelOverlap={false}
        />
        <VictoryGroup offset={2.3}>
          <VictoryBar
            animate={{
              duration: 1000,
              onLoad: { duration: 1500 },
            }}
            style={{
              data: {
                fill: difficultyRatingToggle ? "#f97317" : "#ffffff",
              },
            }}
            barWidth={2}
            data={props.data}
            x="assignmentName"
            y="difficultyRating"
          />

          <VictoryBar
            animate={{
              duration: 1000,
              onLoad: { duration: 1500 },
            }}
            style={{
              data: {
                fill: funRatingToggle ? "#23c45d" : "#ffffff",
              },
            }}
            barWidth={2}
            data={props.data}
            x="assignmentName"
            y="funRating"
          />
        </VictoryGroup>
      </VictoryChart>
    </>
  );
};

export default BarChart;
