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
            <Bar dataKey="difficultyRating" fill="#FE7F2D" />
          ) : (
            ""
          )}
          {funRatingToggle ? <Bar dataKey="funRating" fill="#15BCC5" /> : ""}
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default BarChartRechart;
