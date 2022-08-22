import React from "react";
import "./RemoveDialog.css";
import { selectedIDs } from "../HeaderTitle/HeaderButtons/HeaderButtons";
import {
  deleteSuite,
  deleteTestsCase,
} from "../../../BackEnd/FireStore/TestCase/TestCase";

const RemoveDialog = (props) => {
  const removeHandler = () => {
    if (props.removeFrom === "suitecase") deleteSuite(selectedIDs());
    else if (props.removeFrom === "testcase") deleteTestsCase(selectedIDs());
    props.setDialogIsOpen(false);
  };

  return (
    props.dialogisOpen && (
      <div className="remove-dialog-container" id={props.removeFrom}>
        <div className="remove-dialog-content">
          <h1>{selectedIDs().length === 1 ? props.title1 : props.title}</h1>
          <div className="dialog-buttons">
            <button className="btn btn-delete" onClick={removeHandler}>
              Delete
            </button>
            <button
              className="btn btn-cancel"
              onClick={() => props.setDialogIsOpen(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default RemoveDialog;
