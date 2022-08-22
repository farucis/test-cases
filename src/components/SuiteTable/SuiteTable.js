import React from "react";
import "./SuiteTable.css";
import Table from "../shared/Table/Table";
import HeaderTitle from "../shared/HeaderTitle/HeaderTitle";
import RemoveDialog from "../shared/RemoveDialog/RemoveDialog";

import { GetAllTestCase } from "../../BackEnd/FireStore/TestCase/TestCase";

//--------Export Default MenuNavBar--------//
const SuiteTable = () => {
  const [selectAllCheckBoxs, setSelectAllCheckBoxs] = React.useState(false);
  const [checkBoxSelected, setCheckBoxSelected] = React.useState(false);
  const [dialogisOpen, setDialogIsOpen] = React.useState(false);

  const [data, setData] = React.useState(null);
  const [sortData, setSortData] = React.useState(null);

  React.useEffect(() => {
    getData();
  }, []);

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
        />
      </div>
    </div>
  );
};

export default SuiteTable;

//--------Help Components--------//
