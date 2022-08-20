import React from "react";
import "./TestCaseTable.css";
import TableHeader from "../shared/TableHeader/TableHeader";
import Table from "../shared/Table/Table";
import { testDB } from "../shared/LocalDB";

//--------Export Default TestCaseTable--------//
const TestCaseTable = () => {
  const [selectAllCheckBoxs, setSelectAllCheckBoxs] = React.useState(false);
  const [checkBoxSelected, setCheckBoxSelected] = React.useState(false);
  return (
    <section className="test-table-container">
      <div className="test-table-parent">
        <TableHeader
          title="Test Cases"
          filter={true}
          add={true}
          setCheckBoxSelected={setCheckBoxSelected}
          checkBoxSelected={checkBoxSelected}
          selectAllCheckBoxs={selectAllCheckBoxs}
        />
        <Table
          data={testDB.testcases}
          setCheckBoxSelected={setCheckBoxSelected}
          checkBoxSelected={checkBoxSelected}
          setSelectAllCheckBoxs={setSelectAllCheckBoxs}
        />
      </div>
    </section>
  );
};

export default TestCaseTable;
