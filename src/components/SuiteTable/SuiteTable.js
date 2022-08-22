import React from "react";
import Table from "../shared/Table/Table";
import HeaderTitle from "../shared/HeaderTitle/HeaderTitle";
import { testDB } from "../shared/LocalDB";

import "./SuiteTable.css";
import RemoveDialog from "../shared/RemoveDialog/RemoveDialog";

//--------Export Default MenuNavBar--------//
const SuiteTable = () => {
  const [selectAllCheckBoxs, setSelectAllCheckBoxs] = React.useState(false);
  const [checkBoxSelected, setCheckBoxSelected] = React.useState(false);
  const [dialogisOpen, setDialogIsOpen] = React.useState(false);

  const data = testDB.testcases.filter((item) => item.suite === "1");
  const [sortData, setSortData] = React.useState(data.slice(0));

  return (
    <div className="suite-table-container">
      <div className="suite-table-parent">
        <HeaderTitle
          title="Suites"
          filter={true}
          add={false}
          remove={true}
          setCheckBoxSelected={setCheckBoxSelected}
          checkBoxSelected={checkBoxSelected}
          selectAllCheckBoxs={selectAllCheckBoxs}
          setDialogIsOpen={setDialogIsOpen}
        />
        <Table
          data={data}
          sortData={sortData}
          setSortData={setSortData}
          setCheckBoxSelected={setCheckBoxSelected}
          checkBoxSelected={checkBoxSelected}
          setSelectAllCheckBoxs={setSelectAllCheckBoxs}
        />
        <RemoveDialog
          dialogisOpen={dialogisOpen}
          setDialogIsOpen={setDialogIsOpen}
          title1="You are going to delete selected test from Suite"
          title="You are going to delete selected tests from Suite"
        />
      </div>
    </div>
  );
};

export default SuiteTable;

//--------Help Components--------//
