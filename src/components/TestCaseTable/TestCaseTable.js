import React from "react";
import "./TestCaseTable.css";
import HeaderTitle from "../shared/HeaderTitle/HeaderTitle";
import Table from "../shared/Table/Table";
import { testDB } from "../shared/LocalDB";
import NewTestCase from "../NewTestCase/NewTestCase";
import RemoveDialog from "../shared/RemoveDialog/RemoveDialog";

//--------Export Default TestCaseTable--------//
const TestCaseTable = () => {
  const [selectAllCheckBoxs, setSelectAllCheckBoxs] = React.useState(false);
  const [checkBoxSelected, setCheckBoxSelected] = React.useState(false);
  const [addNewSelected, setAddNewSelected] = React.useState(false);

  const [dialogisOpen, setDialogIsOpen] = React.useState(false);

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
          setDialogIsOpen={setDialogIsOpen}
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
      <RemoveDialog
        dialogisOpen={dialogisOpen}
        setDialogIsOpen={setDialogIsOpen}
        title1="You are going to delete selected test"
        title="You are going to delete selected tests"
      />
    </section>
  );
};

export default TestCaseTable;
