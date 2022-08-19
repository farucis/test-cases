import React from "react";
import "./TestCaseTable.css";
import TableHeader from "../shared/TableHeader/TableHeader";
import Table from "../shared/Table/Table";
import { testDB } from "../shared/LocalDB";

//--------Export Default TestCaseTable--------//
const TestCaseTable = () => {
  return (
    <section className="test-table-container">
      <div className="test-table-parent">
        <TableHeader title="Test Cases" filter={true} add={true} />
        <Table data={testDB.testcases} />
      </div>
    </section>
  );
};

export default TestCaseTable;
