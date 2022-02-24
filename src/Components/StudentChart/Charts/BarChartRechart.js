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
  const { difficultyRatingToggle, funRatingToggle, screenSize } =
    useContext(AppContext);
  const params = useParams();
  return (
    <>
      <ResponsiveContainer
        width="95%"
        height={screenSize < 1024 ? 400 : !params.firstName ? "100%" : 400}
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
            <Bar dataKey="difficultyRating" fill="#FE7F2D" />
          ) : (
            ""
          )}
          {funRatingToggle ? <Bar dataKey="funRating" fill="#047857" /> : ""}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartRechart;
