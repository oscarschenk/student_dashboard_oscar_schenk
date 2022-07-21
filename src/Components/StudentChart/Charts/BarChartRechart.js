import { useContext } from "react";
import { AppContext } from "../../../AppContext";
import { useParams } from "react-router-dom";
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
  const { difficultyRatingToggle, theme, funRatingToggle, screenSize } =
    useContext(AppContext);
  let { firstName } = useParams();
  let funBarColor = theme === "dark" ? "#eab308" : "#047857";
  let difficultyBarColor = theme === "dark" ? "#0284c7" : "#FE7F2D";
  return (
    <>
      <ResponsiveContainer
        minHeight={500}
        minWidth={500}
        width="95%"
        height={screenSize < 1024 && firstName ? 500 : 700}
      >
        <BarChart
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
          <YAxis type="number" domain={[0, 5]} ticks={[0, 1, 2, 3, 4, 5]} />
          <Tooltip />
          <Legend />
          {difficultyRatingToggle ? (
            <Bar dataKey="difficultyRating" fill={difficultyBarColor} />
          ) : (
            ""
          )}
          {funRatingToggle ? (
            <Bar dataKey="funRating" fill={funBarColor} />
          ) : (
            ""
          )}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartRechart;
