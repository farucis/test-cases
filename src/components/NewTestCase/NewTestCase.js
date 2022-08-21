import React from "react";
import HeaderTitle from "../shared/HeaderTitle/HeaderTitle";
import DescriptionInput from "./DescriptionInput/DescriptionInput";
import "./NewTestCase.css";

const NewTestCase = ({ setAddNewSelected }) => {
  //const names = ["Name", "Requirement", "Assignee", "Run", "Status"];
  const [isValid, setIsValid] = React.useState(true);

  return (
    <div id="NewTestCase" className="newTestCase-container">
      <HeaderTitle
        title="New Test Cases"
        filter={false}
        add={false}
        addTest={true}
        setAddNewSelected={setAddNewSelected}
        isValid={isValid}
        setIsValid={setIsValid}
      />

      <div className="inputs-container">
        <NameInput isValid={isValid} setIsValid={setIsValid} />
        <DescriptionInput />
      </div>
    </div>
  );
};

export default NewTestCase;

const NameInput = (props) => {
  return (
    <label className="input-container">
      <input id="nameInput" onChange={() => props.setIsValid(true)} required />
      <span className="input-label">
        Name<span>*</span>
      </span>
      {!props.isValid && (
        <span
          style={{
            display: "flex",
            marginLeft: "4px",
            paddingTop: "4px",
            position: "absolute",
            color: "red",
          }}
        >
          * Test Name Cant Be Empty
        </span>
      )}
    </label>
  );
};
