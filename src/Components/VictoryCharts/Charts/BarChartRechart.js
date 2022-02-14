import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const BarChartRechart = (props) => {
  const { difficultyRatingToggle, funRatingToggle } = useContext(AppContext);
  return (
    <>
      <ResponsiveContainer width="97%" height="80%">
        <BarChart
          width={500}
          height={300}
          data={props.data}
          margin={{
            top: 5,
            right: 30,
            left: -35,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignmentName" />
          <YAxis type="number" domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
          <Tooltip />
          <Legend />
          {difficultyRatingToggle ? (
            <Bar dataKey="difficultyRating" fill="#f97316" />
          ) : (
            ""
          )}
          {funRatingToggle ? <Bar dataKey="funRating" fill="#28c55d" /> : ""}
        </BarChart>
      </ResponsiveContainer>
      {/* <VictoryChart
        domainPadding={{ x: [10, 5], y: 1 }}
        padding={{ top: 10, bottom: 50, right: 35, left: 30 }}
        height={200}
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
      </VictoryChart> */}
    </>
  );
};

export default BarChartRechart;
