import React from "react";
import "./TestCaseTable.css";
import HeaderTitle from "../shared/HeaderTitle/HeaderTitle";
import Table from "../shared/Table/Table";
import { testDB } from "../shared/LocalDB";
import NewTestCase from "../NewTestCase/NewTestCase";

//--------Export Default TestCaseTable--------//
const TestCaseTable = () => {
  const [selectAllCheckBoxs, setSelectAllCheckBoxs] = React.useState(false);
  const [checkBoxSelected, setCheckBoxSelected] = React.useState(false);
  const [addNewSelected, setAddNewSelected] = React.useState(false);
  return (
    <section className="test-table-container">
      <div className="test-table-parent">
        <HeaderTitle
          title="Test Cases"
          filter={true}
          add={true}
          setCheckBoxSelected={setCheckBoxSelected}
          checkBoxSelected={checkBoxSelected}
          selectAllCheckBoxs={selectAllCheckBoxs}
          setAddNewSelected={setAddNewSelected}
        />
        <Table
          data={testDB.testcases}
          setCheckBoxSelected={setCheckBoxSelected}
          checkBoxSelected={checkBoxSelected}
          setSelectAllCheckBoxs={setSelectAllCheckBoxs}
        />

        {addNewSelected && (
          <NewTestCase setAddNewSelected={setAddNewSelected} />
        )}
      </div>
    </section>
  );
};

export default TestCaseTable;
