import { Icon } from "@iconify/react";
import React from "react";
import "./Filter.css";

const Filter = () => {
  const filterDB = {
    name: "filter",
    options: [
      {
        name: "Requirement",
        value: "Requirement",
        options: [
          {
            name: "Strat with",
            value: "Strat with",
          },
          {
            name: "Equals to",
            value: "Equals to",
          },
        ],
      },
      {
        name: "Assignee",
        value: "Assignee",
        options: [
          {
            name: "Faruch I",
            value: "Faruch I",
          },
          {
            name: "Amit Zamir",
            value: "Amit Zamir",
          },
          {
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
            name: "No Run",
            value: "No Run",
          },
          {
            name: "Passed",
            value: "Passed",
          },
          {
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
            name: "Open",
            value: "Open",
          },
          {
            name: "Done",
            value: "Done",
          },
          {
            name: "WIP",
            value: "WIP",
          },
        ],
      },
    ],
  };
  const [DropdownisOpen, setDropdownIsOpen] = React.useState(false);
  const [DropdownData, setDropdownData] = React.useState(filterDB.options);
  const [selectedFilter, setSelectedFilter] = React.useState(null);

  return (
    <div>
      <label
        className="filter-select"
        onClick={() => {
          setDropdownIsOpen(!DropdownisOpen);
          if (selectedFilter === null) setDropdownData(filterDB.options);
        }}
      >
        <div>
          {selectedFilter === null
            ? !DropdownisOpen
              ? "Filter by"
              : "Choose a filter"
            : selectedFilter}
        </div>
        {selectedFilter === null ? (
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
            onClick={() => setSelectedFilter(null)}
          />
        )}
      </label>
      {DropdownisOpen && (
        <div className="filter-dropdown">
          <div className="filter-dropdown-items">
            {DropdownData.map((item, index) => (
              <div
                key={index}
                className="filter-dropdown-item"
                onClick={() => {
                  setDropdownData(item.options ? item.options : []);
                  setSelectedFilter(item.options ? null : item.value);
                }}
              >
                {item.value}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Filter;
