import React from "react";
import "./Table.css";

//--------Export Default Table--------//
const Table = ({ data }) => {
  return (
    <div className="tables-container" style={{ paddingTop: "30px" }}>
      <table className="table">
        <TableTitles />
        {data?.map((testcase) => (
          <TableRow key={testcase.id} testcase={testcase} />
        ))}
      </table>
    </div>
  );
};
export default Table;

//--------Help Components--------//
//----Table Titles----//
const TableTitles = () => (
  <thead style={{ backgroundColor: "#DBEAF4" }}>
    <tr>
      <th className="table-title title-table" scope="col">
        <div>Title</div>
      </th>
      <th className="table-title" scope="col">
        Requirement
      </th>
      <th className="table-title" scope="col">
        Assignee
      </th>
      <th className="table-title" scope="col">
        Run
      </th>
      <th className="table-title" scope="col">
        Status
      </th>
    </tr>
  </thead>
);

//----Table Data Row----//
const TableRow = ({ testcase }) => (
  <tbody>
    <tr className="align-bottom">
      <th
        className="table-data"
        style={{
          textAlign: "start",
          marginTop: "10px",
          display: "flex",
        }}
        scope="row"
      >
        {testcase.title}
      </th>
      <td className="table-data">{testcase.requirement}</td>
      <td className="table-data">{testcase.assignee}</td>
      <td className="table-data">{testcase.status}</td>
      <td
        className="table-data"
        style={
          testcase.Run === "Passed"
            ? { color: "#26D64D" }
            : testcase.Run === "Failed"
            ? { color: "#A40909" }
            : { color: "#000000", opacity: "0.3" }
        }
      >
        {testcase.Run}
      </td>
    </tr>
  </tbody>
);
