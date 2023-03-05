import { Icon } from "@iconify/react";
import React from "react";
import "./Filter.css";
import useStore from "../../../../StateMan/store";

const Filter = (props) => {
  const [DropdownisOpen, setDropdownIsOpen] = React.useState(false);
  const [DropdownData, setDropdownData] = React.useState(filterDB.options);
  const [filterSelected, setFilterSelected] = React.useState(false);
  const [reqFilterLock, setReqFilterLock] = React.useState(false);
  const [inputTextValid, setInputTextValid] = React.useState(false);

  const onChange = (e) => {
    if (e.target.value.length > 0) {
      setInputTextValid(true);
    } else {
      setInputTextValid(false);
    }
  };
  const selectedFilterName = useStore((state) => state.selectedFilterName);
  const setSelectedFilterName = useStore(
    (state) => state.setSelectedFilterName
  );

  const data = useStore((state) => state.testCase);
  const setData = useStore((state) => state.setData);
  const setSortData = useStore((state) => state.setSortData);
  const tempData = useStore((state) => state.tempData);

  const selectDropDownHandler = () => {
    if (selectedFilterName === null) {
      //selectedFilterName !== null && setDropdownIsOpen(false);

      /////---------- start dropdown ------------///////
      setDropdownData(filterDB.options);
      setFilterSelected(true);
      setInputTextValid(false);
    } else if (selectedFilterName !== null && filterSelected === false) {
      /////----------close dropdown, load defult options ------------///////
      setDropdownIsOpen(false);
      setSelectedFilterName(null);
      setDropdownData(filterDB.options.slice(0));
      setInputTextValid(false);

      //////////////////////////////////////////////////////////
    } else if (
      selectedFilterName !== null &&
      (selectedFilterName === "Start with" ||
        selectedFilterName === "Equals to") &&
      filterSelected === true &&
      reqFilterLock === false
    ) {
      /////---------- back from input dropdown to requirement------------///////
      setInputTextValid(false);

      setDropdownData(filterDB.options[0].options.slice(0, 2));
      setFilterSelected(false);
      setSelectedFilterName("Requirement");
      setDropdownIsOpen(true);

      //////////////////////////////////////////////////////////
    } else if (
      selectedFilterName !== null &&
      (selectedFilterName === "Start with" ||
        selectedFilterName === "Equals to") &&
      filterSelected === true &&
      reqFilterLock === true
    ) {
      /////---------- dropdown input apply ,close dropdown ------------///////

      setDropdownIsOpen(false);
      //////////////////////////////////////////////////////////
    }
    !selectedFilterName && setDropdownIsOpen(!DropdownisOpen);
  };
  const dialogCancelHandler = () => {
    setInputTextValid(false);
    setDropdownData(filterDB.options[0].options.slice(0, 2));
    setFilterSelected(false);
    setSelectedFilterName("Requirement");

    //setDropdownIsOpen(true);
  };

  const dialogApplyHandler = (item) => {
    FilterHandler(
      item,
      data,
      setData,
      setSortData,
      setSelectedFilterName,
      selectedFilterName
    );
    setDropdownIsOpen(false);
    setReqFilterLock(true);
  };

  const filterInput = document.getElementById("filterInput");

  filterInput &&
    (filterInput.onblur = () => {
      filterInput.focus();
    });

  return (
    <div>
      <label className="filter-select" onClick={selectDropDownHandler}>
        <div>
          {selectedFilterName === null
            ? !DropdownisOpen
              ? "Filter by"
              : "Choose a filter"
            : selectedFilterName}
        </div>
        {selectedFilterName === null ? (
          <Icon
            icon={
              !DropdownisOpen
                ? "dashicons:arrow-down-alt2"
                : "dashicons:arrow-up-alt2"
            }
          />
        ) : (
          <Icon
            style={{ fontSize: "1.3rem" }}
            icon="eva:close-outline"
            onClick={() => {
              setSelectedFilterName(null);
              setDropdownData(filterDB.options);
              setData(tempData.slice(0));
              setSortData(tempData.slice(0));
              setFilterSelected(false);
              setReqFilterLock(false);
            }}
          />
        )}
      </label>
      {DropdownisOpen && (
        <div className="filter-dropdown">
          <div className="filter-dropdown-items">
            {DropdownData.map((item, index) => (
              <div
                key={index}
                className={
                  (selectedFilterName === "Requirement Start with" ||
                    selectedFilterName === "Requirement Equals to") &&
                  filterSelected
                    ? "filter-input-dropdown-item"
                    : "filter-dropdown-item"
                }
                style={
                  (selectedFilterName === "Requirement Start with" ||
                    selectedFilterName === "Requirement Equals to") &&
                  filterSelected
                    ? { animation: "cardBorder 0.5s alternate infinite" }
                    : {}
                }
                onClick={() => {
                  if (DropdownData.length > 1) {
                    setFilterSelected(false);
                    setSelectedFilterName(item.name);
                  }
                  if (DropdownData.length !== 1) {
                    //setFilterSelected(false);

                    (item.name === "Start with" || item.name === "Equals to") &&
                      setSelectedFilterName("Requirement " + item.name);

                    !item.options &&
                    (item.name === "Start with" || item.name === "Equals to")
                      ? setDropdownData(filterDB.options[0].options.slice(0, 2))
                      : setDropdownData(item.options);

                    selectedFilterName !== null &&
                      filterSelected === false &&
                      setFilterSelected(true);

                    !item.options &&
                      item.op !== "Requirement" &&
                      FilterHandler(item, data, setData, setSortData);

                    !item.options &&
                      item.name !== "Start with" &&
                      item.name !== "Equals to" &&
                      setDropdownIsOpen(false);
                  }
                }}
              >
                {item.value}
                {(selectedFilterName === "Requirement Start with" ||
                  selectedFilterName === "Requirement Equals to") &&
                  filterSelected && (
                    <div className="filter-input">
                      <div className="filter-input-area">
                        <input
                          type="text"
                          id="filterInput"
                          onChange={onChange}
                        />
                      </div>
                      <div className="filter-input-buttons">
                        <button
                          className="btn-Filter"
                          style={
                            inputTextValid
                              ? { backgroundColor: "rgba(134, 54, 84, 0.9)" }
                              : { backgroundColor: "#C4C4C4" }
                          }
                          onClick={() => {
                            if (inputTextValid) {
                              dialogApplyHandler(item);
                              setInputTextValid(true);
                            } else setInputTextValid(false);
                          }}
                        >
                          Apply
                        </button>
                        <button
                          className="btn-Filter"
                          onClick={() => dialogCancelHandler()}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;

const FilterHandler = (
  filteritem,
  data,
  setData,
  setSortData,
  setSelectedFilterName,
  selectedFilterName
) => {
  var result = null;
  switch (filteritem.op) {
    case "Requirement":
      const input = document.getElementById("filterInput").value;

      const newFilterName =
        (input.length < 6 ? selectedFilterName : filteritem.name) +
        ": " +
        input;
      setSelectedFilterName(newFilterName);
      if (filteritem.name === "Equals to")
        result = data.filter((obj) => obj.requirement === input);
      else if (filteritem.name === "Start with")
        result = data.filter((obj) =>
          obj.requirement.toLowerCase().startsWith(input.toLowerCase())
        );
      setData(result);
      setSortData(result.slice(0));
      break;

    case "Assignee":
      result = data.filter((obj) => obj.assignee === filteritem.name);
      setData(result);
      setSortData(result.slice(0));
      break;

    case "Run":
      result = data.filter((obj) => obj.Run === filteritem.name);
      setData(result);
      setSortData(result.slice(0));
      break;

    case "Status":
      result = data.filter((obj) => obj.status === filteritem.name);
      setData(result);
      setSortData(result.slice(0));
      break;

    default:
      break;
  }
};

const filterDB = {
  name: "filter",
  options: [
    {
      name: "Requirement",
      value: "Requirement",
      options: [
        {
          op: "Requirement",
          name: "Start with",
          value: "Start with",
          options: [
            {
              op: "Requirement",
              name: "Start with",
              value: "Start with",
            },
          ],
        },
        {
          op: "Requirement",
          name: "Equals to",
          value: "Equals to",
          options: [
            {
              op: "Requirement",
              name: "Equals to",
              value: "Equals to",
            },
          ],
        },
      ],
    },
    {
      name: "Assignee",
      value: "Assignee",
      options: [
        {
          op: "Assignee",
          name: "Faruch I",
          value: "Faruch I",
        },
        {
          op: "Assignee",
          name: "Amit Zamir",
          value: "Amit Zamir",
        },
        {
          op: "Assignee",
          name: "Yakov K",
          value: "Yakov K",
        },
      ],
    },
    {
      name: "Run",
      value: "Run",
      options: [
        {
          op: "Run",
          name: "No Run",
          value: "No Run",
        },
        {
          op: "Run",
          name: "Passed",
          value: "Passed",
        },
        {
          op: "Run",
          name: "Failed",
          value: "Failed",
        },
      ],
    },
    {
      name: "Status",
      value: "Status",
      options: [
        {
          op: "Status",
          name: "Open",
          value: "Open",
        },
        {
          op: "Status",
          name: "Done",
          value: "Done",
        },
        {
          op: "Status",
          name: "WIP",
          value: "WIP",
        },
      ],
    },
  ],
};
