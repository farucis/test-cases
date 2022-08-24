import React from "react";
import { Icon } from "@iconify/react";
import useStore from "../../../../StateMan/store";

//--------Export Default Table Titles--------//
const TableTitles = ({ isSorted, setIsSorted, ...props }) => {
  const setFilterIsOpen = useStore((state) => state.setFilterIsOpen);
  const selectAll = () => {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const source = checkboxes[0];
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i] !== source) checkboxes[i].checked = source.checked;
    }
    props.setSelectAllCheckBoxs(source.checked);
    props.setCheckBoxSelected(false);
    setFilterIsOpen(false);
  };

  return (
    <thead style={{ backgroundColor: "#DBEAF4" }}>
      <tr>
        <th className="table-title title-table" scope="col">
          <label className="container">
            <input type="checkbox" id="selectAll" onClick={selectAll} />
            <span
              className={
                props.checkBoxSelected !== true
                  ? "checkmark cmt"
                  : "checkmark minusMark"
              }
            ></span>
          </label>
          <FirstTitle
            isSorted={isSorted}
            setIsSorted={setIsSorted}
            {...props}
          />
        </th>
        <th className="table-title" style={{ width: "200px" }} scope="col">
          Requirement
        </th>
        <th className="table-title" style={{ width: "250px" }} scope="col">
          Assignee
        </th>
        <th className="table-title" style={{ width: "100px" }} scope="col">
          Run
        </th>
        <th className="table-title" style={{ width: "100px" }} scope="col">
          Status
        </th>
      </tr>
    </thead>
  );
};

export default TableTitles;

//--------Help Components--------//
//----First Title----//
const FirstTitle = ({ isSorted, setIsSorted, ...props }) => {
  const sortuUp = () => {
    props.sortData.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;

      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;

      return 0;
    });
  };

  const sortHandler = () => {
    switch (isSorted) {
      case "":
        sortuUp();
        setIsSorted("up");
        break;
      case "up":
        props.sortData.reverse();
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
