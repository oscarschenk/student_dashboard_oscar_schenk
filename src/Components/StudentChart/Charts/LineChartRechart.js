import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../AppContext";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartRechart = (props) => {
  const { difficultyRatingToggle, theme, funRatingToggle, screenSize } =
    useContext(AppContext);
  let { firstName } = useParams();
  let funBarColor = theme === "dark" ? "#0284c7" : "#FE7F2D";
  let difficultyBarColor = theme === "dark" ? "#facc15" : "#047857";

  return (
    <>
      <ResponsiveContainer
        minHeight={500}
        minWidth={500}
        width="95%"
        height={screenSize < 1024 && firstName ? 500 : "100%"}
      >
        <LineChart
          data={props.data}
          margin={{
            top: 5,
            right: 70,
            left: 0,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignmentName" />
          <YAxis type="number" domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
          <Tooltip />
          <Legend />
          {difficultyRatingToggle ? (
            <Line
              type="basis"
              dataKey="difficultyRating"
              stroke={funBarColor}
              dot={false}
              strokeWidth={screenSize <= 1024 ? 2 : 5}
            />
          ) : (
            ""
          )}
          {funRatingToggle ? (
            <Line
              type="basis"
              dataKey="funRating"
              stroke={difficultyBarColor}
              strokeWidth={screenSize <= 1024 ? 2 : 5}
              dot={false}
            />
          ) : (
            ""
          )}
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default LineChartRechart;
