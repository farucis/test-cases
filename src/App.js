import React from "react";
import "./App.css";

import MenuNavBar from "./components/MenuNavBar/MenuNavBar";
import SuiteTable from "./components/SuiteTable/SuiteTable";
import TestCaseTable from "./components/TestCaseTable/TestCaseTable";

//--------Export Default MenuNavBar--------//
function App() {
  const [isSelected, setIsSelected] = React.useState("Tests");

  return (
    <div className="App" style={{backgroundColor:"#fff"}} >
      app for heroku test
    </div>
  );
}

export default App;

//--------Help Components--------//
//----select Section----//
const selectSection = (section) => {
  switch (section) {
    case "Tests":
      return <TestCaseTable />;

    case "Suites":
      return <SuiteTable />;
    default:
      return <div>No section selected</div>;
  }
};
