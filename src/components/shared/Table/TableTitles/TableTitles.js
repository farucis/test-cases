import React from "react";
import { Icon } from "@iconify/react";

//--------Export Default Table Titles--------//
const TableTitles = ({ isSorted, setIsSorted, ss, setSs }) => {
  const selectAll = () => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const source = checkboxes[0];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== source) checkboxes[i].checked = source.checked;
    }
    setSs(false);
  };
  return (
    <thead style={{ backgroundColor: "#DBEAF4" }}>
      <tr>
        <th className="table-title title-table" scope="col">
          <label className="container">
            <input type="checkbox" id="selectAll" onClick={selectAll} />
            <span className={ss !== true ? "checkmark" : "minmark"}></span>
          </label>
          <FirstTitle isSorted={isSorted} setIsSorted={setIsSorted} />
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
};

export default TableTitles;

//--------Help Components--------//
//----First Title----//
const FirstTitle = ({ isSorted, setIsSorted }) => {
  const sortHandler = () => {
    switch (isSorted) {
      case "":
        setIsSorted("up");
        break;
      case "up":
        setIsSorted("down");
        break;
      case "down":
        setIsSorted("");
        break;
      default:
        setIsSorted("");
    }
  };
  return (
    <div
      style={{
        marginLeft: "32px",
        cursor: "pointer",
      }}
      onClick={sortHandler}
      htmlFor="selectAll"
    >
      Title
      <Icon
        style={{
          fontSize: "16px",
          marginLeft: "8px",
          marginBottom: "2px",
          color: "#863654",
        }}
        icon={
          isSorted === "up"
            ? "bi:arrow-up"
            : isSorted === "down"
            ? "bi:arrow-down"
            : null
        }
      />
    </div>
  );
};
