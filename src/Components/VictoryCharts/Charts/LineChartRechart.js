import { useContext } from "react";
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
  const { difficultyRatingToggle, funRatingToggle } = useContext(AppContext);
  const screenWidth = window.innerWidth;
  return (
    <>
      <ResponsiveContainer width="97%" height="80%">
        <LineChart
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
          <YAxis type="number" domain={[0, 5]} ticks={[1, 2, 3, 4, 5]} />
          <Tooltip />
          <Legend />
          {difficultyRatingToggle ? (
            <Line
              type="basis"
              dataKey="difficultyRating"
              stroke="#f97316"
              dot={false}
              strokeWidth={screenWidth <= 1024 ? 2 : 7}
            />
          ) : (
            ""
          )}
          {funRatingToggle ? (
            <Line
              type="basis"
              dataKey="funRating"
              stroke="#28c55d"
              strokeWidth={screenWidth <= 1024 ? 2 : 7}
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
