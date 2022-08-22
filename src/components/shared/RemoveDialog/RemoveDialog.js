import React from "react";
import "./RemoveDialog.css";
import { selectedIDs } from "../HeaderTitle/HeaderButtons/HeaderButtons";
import {
  deleteSuite,
  deleteTestsCase,
} from "../../../BackEnd/FireStore/TestCase/TestCase";
import useStore from "../../../StateMan/store";

const RemoveDialog = (props) => {
  const testCase = useStore((state) => state.testCase);

  const removeHandler = () => {
    const selectedTestsCaseId = selectedIDs();

    for (let i = 0; i < selectedTestsCaseId.length; i++) {
      const index = testCase.findIndex(
        (obj) => obj.id === selectedTestsCaseId[i]
      );
      if (index > -1 && testCase[index].id === selectedTestsCaseId[i]) {
        if (props.removeFrom === "suitecase") {
          testCase.splice(index, 1);
        } else if (props.removeFrom === "testcase") testCase.splice(index, 1);
      }
    }

    if (props.removeFrom === "suitecase") {
      deleteSuite(selectedTestsCaseId);
    } else if (props.removeFrom === "testcase") {
      deleteTestsCase(selectedTestsCaseId);
    }

    props.setDialogIsOpen(false);
    setFalse(props.setCheckBoxSelected);
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

//////////////////////////////////////////////////////////////////////////////////////////////
export const setFalse = (setCheckBoxSelected) => {
  setCheckBoxSelected(false);
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].checked = false;
  }
};
