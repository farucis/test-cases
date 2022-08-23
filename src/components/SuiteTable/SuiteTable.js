import React from "react";
import "./SuiteTable.css";
import Table from "../shared/Table/Table";
import HeaderTitle from "../shared/HeaderTitle/HeaderTitle";
import RemoveDialog from "../shared/RemoveDialog/RemoveDialog";

import useStore from "../../StateMan/store";
import { GetAllTestCase } from "../../BackEnd/FireStore/TestCase/TestCase";

//--------Export Default MenuNavBar--------//
const SuiteTable = () => {
  const [selectAllCheckBoxs, setSelectAllCheckBoxs] = React.useState(false);
  const [checkBoxSelected, setCheckBoxSelected] = React.useState(false);
  const [dialogisOpen, setDialogIsOpen] = React.useState(false);

  const data = useStore((state) => state.testCase);
  const setData = useStore((state) => state.setData);
  const sortData = useStore((state) => state.sortData);
  const setSortData = useStore((state) => state.setSortData);

  React.useEffect(() => {
    getData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const getData = async () => {
    var d = await GetAllTestCase();
    d = d.filter((item) => item.suite === "1");
    setData(d.filter((item) => item.suite === "1"));
    setSortData(d.slice(0));
  };

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
          setSelectAllCheckBoxs={setSelectAllCheckBoxs}
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
          removeFrom="suitecase"
          setCheckBoxSelected={setCheckBoxSelected}
        />
      </div>
    </div>
  );
};

export default SuiteTable;

//--------Help Components--------//
