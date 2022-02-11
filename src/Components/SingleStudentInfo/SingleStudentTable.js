import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../AppContext";

function SingleStudentTable() {
  const params = useParams();
  const { chartData } = useContext(AppContext);
  const singleStudentChartData = chartData.filter((student) => {
    return student.studentName === params.firstName;
  });

  const renderTableHeader = () => {
    let header = Object.keys(singleStudentChartData[0]);
    return header.map((key, index) => {
      return (
        <th className="p-4 text-center bg-green-500 text-white" key={index}>
          {key.toUpperCase()}
        </th>
      );
    });
  };

  const singleStudentTableData = singleStudentChartData.map((item) => {
    const { studentName, assignmentName, difficultyRating, funRating } = item;
    return (
      <tr key={assignmentName} className="even:bg-gray-300">
        <td className="p-1 border-2 border-gray-200">{studentName}</td>
        <td className="p-1 border-2 border-gray-200">{assignmentName}</td>
        <td className="p-1 border-2 border-gray-200">{difficultyRating}</td>
        <td className="p-1 border-2 border-gray-200">{funRating}</td>
      </tr>
    );
  });
  return (
    <div className="rounded-lg shadow-2xl flex items-center flex-col bg-white my-12 mx-12 pb-12">
      <h1>Table View of Rating Data</h1>
      <table className="text-center border-2 border-gray-200 rounded-lg shadow-2xl">
        <tbody className="rounded-lg">
          <tr>{renderTableHeader()}</tr>
          {singleStudentTableData}
        </tbody>
      </table>
    </div>
  );
}

export default SingleStudentTable;
