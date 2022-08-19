import React from "react";
import { Icon } from "@iconify/react";

import "./TableHeader.css";

//--------Export Default MenuNavBar--------//
const TableHeader = ({ title, ...props }) => {
  return (
    <div>
      <header className="table-header">
        <h1 style={title === "Suites" ? { width: "68px" } : { width: "114px" }}>
          {title}
        </h1>
        <HeaderButtons {...props} />
      </header>
      <HeaderLine title={title} />
    </div>
  );
};

export default TableHeader;


//--------Help Components--------//
//----Header Buttons----//
const HeaderButtons = ({ ...props }) => (
  <div className="table-header-buttons">
    {props.filter && (
      <button className="btn btn-filter">
        <Icon icon="fluent:filter-24-regular" />
        <span className="bottom-tooltip">Filter</span>
      </button>
    )}
    {props.add && (
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
          <span className="bottom-tooltip">Add</span>
        </button>
      </>
    )}
  </div>
);

//----Header Line----//
const HeaderLine = ({ title }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div
      className="table-header-text-line"
      style={title === "Suites" ? { width: "68px" } : { width: "123px" }}
    />
    <div className="table-header-line" />
  </div>
);
