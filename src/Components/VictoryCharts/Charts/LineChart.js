import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import { useParams } from "react-router-dom";
import {
  VictoryLine,
  VictoryChart,
  VictoryAxis,
  VictoryGroup,
  VictoryLabel,
} from "victory";

const LineChart = (props) => {
  const { difficultyRatingToggle, funRatingToggle } = useContext(AppContext);
  const params = useParams();
  return (
    <>
      <VictoryChart
        domainPadding={{ x: [10, 5], y: [0, 5] }}
        padding={{ top: 10, bottom: 50, right: 35, left: 30 }}
        height={props.screenWidth <= 1280 ? 300 : 230}
      >
        <VictoryAxis
          tickLabelComponent={<VictoryLabel textAnchor="start" />}
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 3, padding: 30 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 3, padding: 2, angle: 55 },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 5, padding: 30 },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 5, padding: 3 },
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
