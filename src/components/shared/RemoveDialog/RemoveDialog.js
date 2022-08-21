import React from "react";
import "./RemoveDialog.css";

const RemoveDialog = (props) => {
  var count = 0;
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked === true) {
      count++;
    }
  }
  return (
    props.dialogisOpen && (
      <div className="remove-dialog-container">
        <div className="remove-dialog-content">
          <h1>{count === 1 ? props.title1 : props.title}</h1>
          <div className="dialog-buttons">
            <button
              className="btn btn-delete"
              onClick={() => props.setDialogIsOpen(false)}
            >
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
