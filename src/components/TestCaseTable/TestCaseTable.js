import React from "react";
import "./TestCaseTable.css";
import HeaderTitle from "../shared/HeaderTitle/HeaderTitle";
import Table from "../shared/Table/Table";
import NewTestCase from "../NewTestCase/NewTestCase";
import RemoveDialog from "../shared/RemoveDialog/RemoveDialog";

import useStore from "../../StateMan/store";
import { GetAllTestCase } from "../../BackEnd/FireStore/TestCase/TestCase";

//--------Export Default TestCaseTable--------//
const TestCaseTable = () => {
  const [selectAllCheckBoxs, setSelectAllCheckBoxs] = React.useState(false);
  const [checkBoxSelected, setCheckBoxSelected] = React.useState(false);
  const [addNewSelected, setAddNewSelected] = React.useState(false);

  const [dialogisOpen, setDialogIsOpen] = React.useState(false);

  const data = useStore((state) => state.testCase);
  const setData = useStore((state) => state.setData);
  const sortData = useStore((state) => state.sortData);
  const setSortData = useStore((state) => state.setSortData);

  React.useEffect(() => {
    getData();
  }, [data]);// eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    const d = await GetAllTestCase();
    setData(d);
    setSortData(d.slice(0));
  };

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
          data={data}
          sortData={sortData}
          setSortData={setSortData}
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
        removeFrom="testcase"
        setCheckBoxSelected={setCheckBoxSelected}
      />
    </section>
  );
};

export default TestCaseTable;
