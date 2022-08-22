import React from "react";
import "./Table.css";

import TableTitles from "./TableTitles/TableTitles";

//--------Export Default Table--------//
const Table = ({
  data,
  sortData,
  setSortData,
  checkBoxSelected,
  setCheckBoxSelected,
  setSelectAllCheckBoxs,
}) => {
  const [isSorted, setIsSorted] = React.useState("");
  return (
    <div className="tables-container" style={{ paddingTop: "30px" }}>
      <table className="table">
        <TableTitles
          data={data}
          sortData={sortData}
          setSortData={setSortData}
          isSorted={isSorted}
          setIsSorted={setIsSorted}
          checkBoxSelected={checkBoxSelected}
          setCheckBoxSelected={setCheckBoxSelected}
          setSelectAllCheckBoxs={setSelectAllCheckBoxs}
        />

        {isSorted === ""
          ? data?.map((testcase) => (
              <TableRow
                key={testcase.id}
                testcase={testcase}
                setCheckBoxSelected={setCheckBoxSelected}
                setSelectAllCheckBoxs={setSelectAllCheckBoxs}
              />
            ))
          : sortData?.map((testcase) => (
              <TableRow
                key={testcase.id}
                testcase={testcase}
                setCheckBoxSelected={setCheckBoxSelected}
                setSelectAllCheckBoxs={setSelectAllCheckBoxs}
              />
            ))}
      </table>
    </div>
  );
};
export default Table;

//--------Help Components--------//
//----Table Data Row----//
const TableRow = ({ testcase, setCheckBoxSelected, setSelectAllCheckBoxs }) => {
  const toggle = () => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const source = checkboxes[0];
    var flag = true;
    var count = 0;
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== source && checkboxes[i].checked === false) {
        flag = false;
      } else {
        count++;
      }
    }
    source.checked = flag;

    if (count < checkboxes.length && count > 1) {
      setCheckBoxSelected(true);
    } else if (count === checkboxes.length) {
      setSelectAllCheckBoxs(true);
      setCheckBoxSelected(false);
    } else {
      setCheckBoxSelected(false);
      setSelectAllCheckBoxs(false);
    }
  };
  return (
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
          <div>
            <label className="container">
              <input type="checkbox" id={testcase.title} onClick={toggle} />
              <span className="checkmark"></span>
            </label>
            <div
              style={{
                marginLeft: "32px",
              }}
              htmlFor={testcase.title}
            >
              {testcase.title}
            </div>
          </div>
        </th>
        <td className="table-data">{testcase.requirement}</td>
        <td className="table-data">{testcase.assignee}</td>
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
        <td className="table-data">{testcase.status}</td>
      </tr>
    </tbody>
  );
};
