import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";

const LineChart = (props) => {
  const { difficultyRatingToggle, funRatingToggle } = useContext(AppContext);
  return (
    <>
      <VictoryChart
        domainPadding={{ x: [10, 5], y: 1 }}
        padding={{ top: 10, bottom: 50, right: 50, left: 30 }}
        height={120}
      >
        <VictoryAxis
          tickLabelComponent={<VictoryLabel angle={45} textAnchor="start" />}
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 3, padding: 30 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 3, padding: 5, angle: 45 },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 5, padding: 30 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 5, padding: 5 },
          }}
          tickValues={[0, 1, 2, 3, 4, 5]}
        />
        <VictoryGroup offset={0}>
          <VictoryLine
            interpolation="basis"
            animate={{
              duration: 750,
              onLoad: { duration: 1500 },
            }}
            style={{
              data: {
                stroke: "#f97317",
                strokeWidth: 1.5,
                opacity: difficultyRatingToggle ? 1 : 0,
              },
            }}
            data={props.data}
            x="assignmentName"
            y="difficultyRating"
          />

          <VictoryLine
            interpolation="basis"
            animate={{
              duration: 750,
              onLoad: { duration: 1500 },
            }}
            style={{
              data: {
                stroke: "#23c45d",
                strokeWidth: 1.5,
                opacity: funRatingToggle ? 1 : 0,
              },
            }}
            data={props.data}
            x="assignmentName"
            y="funRating"
          />
        </VictoryGroup>
      </VictoryChart>
    </>
  );
};

export default LineChart;
