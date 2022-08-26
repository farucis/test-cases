import React from "react";
import "./Table.css";
import useStore from "../../../StateMan/store";

import TableTitles from "./TableTitles/TableTitles";
import Loading from "../Loading/Loading";

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
  const [isLoding, setIsLoding] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoding(true);
    }, 800);
  }, []);

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
        {data && isLoding ? (
          isSorted === "" ? (
            data?.map((testcase, index) => (
              <TableRow
                key={index}
                testcase={testcase}
                setCheckBoxSelected={setCheckBoxSelected}
                setSelectAllCheckBoxs={setSelectAllCheckBoxs}
              />
            ))
          ) : (
            sortData?.map((testcase, index) => (
              <TableRow
                key={index}
                testcase={testcase}
                setCheckBoxSelected={setCheckBoxSelected}
                setSelectAllCheckBoxs={setSelectAllCheckBoxs}
              />
            ))
          )
        ) : (
          <Loading />
        )}
      </table>
    </div>
  );
};
export default Table;

//--------Help Components--------//
//----Table Data Row----//
const TableRow = ({ testcase, setCheckBoxSelected, setSelectAllCheckBoxs }) => {
  const setFilterIsOpen = useStore((state) => state.setFilterIsOpen);

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
    setFilterIsOpen(false);
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
              <input type="checkbox" id={testcase.id} onClick={toggle} />
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
