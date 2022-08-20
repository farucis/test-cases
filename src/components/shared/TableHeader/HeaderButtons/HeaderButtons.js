import React from "react";
import { Icon } from "@iconify/react";

//--------Export Default Header Buttons--------//
const HeaderButtons = ({ ...props }) => {
  const [FilterisOpen, setFilterIsOpen] = React.useState(false);

  return (
    <div className="table-header-buttons">
      {props.filter &&
        (FilterisOpen ? (
          <Filter />
        ) : (
          <button
            className="btn btn-filter"
            onClick={() => setFilterIsOpen(true)}
          >
            <Icon icon="fluent:filter-24-regular" />
            <span className="bottom-tooltip">Filter</span>
          </button>
        ))}
      {(props.checkBoxSelected || props.selectAllCheckBoxs) && (
        <>
          <div
            style={{
              backgroundColor: "#863654",
              height: "85%",
              width: "1px",
            }}
          />
          <button className="btn btn-add">
            <Icon icon="ic:round-add" />
            <span className="bottom-tooltip">Add to Suite</span>
          </button>
          <button className="btn btn-remove">
            <Icon icon="eva:close-outline" />
            <span className="bottom-tooltip">Remove</span>
          </button>
        </>
      )}
      {props.add && !props.checkBoxSelected && !props.selectAllCheckBoxs && (
        <button className="btn btn-add">
          <Icon icon="ic:round-add" />
          <span className="bottom-tooltip">Add</span>
        </button>
      )}
    </div>
  );
};

export default HeaderButtons;

//--------Help Components--------//
//----Filter----//
const Filter = () => {
  const filterDB = {
    name: "filter",
    options: [
      {
        name: "Requirement",
        value: "Requirement",
        options: [
          {
            name: "ST functional",
            value: "ST functional",
          },
          {
            name: "MI functional",
            value: "MI functional",
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
