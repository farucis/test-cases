import React from "react";

import "./HeaderTitle.css";
import HeaderButtons from "./HeaderButtons/HeaderButtons";

//--------Export Default MenuNavBar--------//
const TableHeader = ({ title, ...props }) => {
  return (
    <div>
      <header className="table-header">
        <h1 id={`${title}-text`} style={{ width: title.length * 11.4 }}>
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
//----Header Line----//
const HeaderLine = ({ title }) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <div
      className="table-header-text-line"
      style={{ width: title.length * 12.3 }}
    />
    <div className="table-header-line" />
  </div>
);
