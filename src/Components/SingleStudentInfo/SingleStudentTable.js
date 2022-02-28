import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";

function SingleStudentTable() {
  const { firstName } = useParams();
  const { chartData } = useContext(AppContext);
  const singleStudentChartData = chartData.filter((student) => {
    return student.studentName === firstName;
  });

  const singleStudentTableData = singleStudentChartData.map((item) => {
    const { assignmentName, difficultyRating, funRating } = item;
    return (
      <tr key={assignmentName} className="even:bg-gray-300 w-full">
        {/* <td className="p-1 border-2 border-gray-200">{studentName}</td> */}
        <td className="p-1 border-2 border-gray-200">{assignmentName}</td>
        <td className="p-1 border-2 border-gray-200">{difficultyRating}</td>
        <td className="p-1 border-2 border-gray-200">{funRating}</td>
      </tr>
    );
  });

  return (
    <div className="shadow-2xl rounded-xl text-xs flex items-center flex-col bg-white my-8 mx-4 py-8 ">
      <h1 className="text-2xl pb-4">Table View of Rating Data</h1>
      <table className="text-center border-2border-gray-200 shadow-2xl">
        <tbody>
          <tr className="text-white">
            <th className="p-4 text-center bg-emerald-700 dark:bg-sky-600">
              Assignment
            </th>
            <th className="p-4 text-center bg-emerald-700 dark:bg-sky-600">
              Enjoyment
            </th>
            <th className="p-4 text-center bg-emerald-700 dark:bg-sky-600">
              Difficulty
            </th>
          </tr>
          {singleStudentTableData}
        </tbody>
      </table>
    </div>
  );
}

export default SingleStudentTable;
