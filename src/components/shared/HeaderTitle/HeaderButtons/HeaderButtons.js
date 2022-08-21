import React from "react";
import { Icon } from "@iconify/react";
import "./HeaderButtons.css";
import Filter from "../Filter/Filter";

//--------Export Default Header Buttons--------//
const HeaderButtons = ({ ...props }) => {
  const [FilterisOpen, setFilterIsOpen] = React.useState(false);
  return (
    <div className="table-header-buttons">
      <FilterButton
        FilterisOpen={FilterisOpen}
        setFilterIsOpen={setFilterIsOpen}
        {...props}
      />
      <SelectTestButton {...props} />
      <NavToNewTestButton {...props} setFilterIsOpen={setFilterIsOpen} />
      <AddNewTestButton {...props} />
      <RemoveFromSuiteButton {...props} />
    </div>
  );
};

export default HeaderButtons;

//--------Help Components--------//
//----Filter Button----//
const FilterButton = ({ ...props }) =>
  props.filter &&
  (props.FilterisOpen ? (
    <Filter />
  ) : (
    <button
      className="btn btn-filter"
      onClick={() => props.setFilterIsOpen(true)}
    >
      <Icon icon="fluent:filter-24-regular" />
      <span className="bottom-tooltip">Filter</span>
    </button>
  ));

//----Select Test Button----//
const SelectTestButton = ({ ...props }) =>
  props.add &&
  (props.checkBoxSelected || props.selectAllCheckBoxs) &&(
    <>
      <div
        style={{
          backgroundColor: "#863654",
          height: "85%",
          width: "1px",
        }}
      />
      <button className="btn btn-add">
        <Icon icon="ic:round-add" />
        <span className="bottom-tooltip">Add to Suite</span>
      </button>
      <button className="btn btn-remove"  onClick={()=>props.setDialogIsOpen(true)}>
        <Icon icon="eva:close-outline" />
        <span className="bottom-tooltip">Remove</span>
      </button>
    </>
  );

//----Nav To New Test page Button----//
const NavToNewTestButton = ({ ...props }) =>
  props.add &&
  !props.checkBoxSelected &&
  !props.selectAllCheckBoxs && (
    <button
      className="btn btn-add"
      onClick={() => {
        props.setAddNewSelected(true);
        props.setFilterIsOpen(false);
      }}
    >
      <Icon icon="ic:round-add" />
      <span className="bottom-tooltip">Add</span>
    </button>
  );

//----Add New Test Button----//
const AddNewTestButton = ({ ...props }) => {
  var data = { name: "", description: "", assignee: "", run: "", status: "" };

  const addNewHandler = () => {
    if (document.getElementById("nameInput").value.length > 0) {
      props.setAddNewSelected(false);
      props.setIsValid(true);

      data.name = document.getElementById("nameInput").value;
      data.description = document.getElementById("descriptionInput").value;
      //data.assignee = document.getElementById("assigneeInput").value;
      //data.run = document.getElementById("runInput").value;

      if (data.run === "Passed") data.status = "Done";
      else if (data.run === "Failed") data.status = "WIP";
      else if (data.run === "No Run") data.status = "Open";
    } else {
      props.setIsValid(false);
    }
  };

  return (
    props.addTest && (
      <>
        <button className="btn btn-add" type="submit" onClick={addNewHandler}>
          <Icon icon="ic:round-add" />
          <span className="bottom-tooltip">New</span>
        </button>
        <button
          className="btn btn-remove"
          onClick={() => props.setAddNewSelected(false)}
        >
          <Icon icon="eva:close-outline" />
          <span className="bottom-tooltip">Cancel</span>
        </button>
      </>
    )
  );
};

//----Remove From Suite Button----//
const RemoveFromSuiteButton = ({ ...props }) => {
  return (
    props.remove &&
    (props.checkBoxSelected || props.selectAllCheckBoxs) && (
      <button className="btn btn-remove" onClick={()=>props.setDialogIsOpen(true)}>
        <Icon icon="eva:close-outline" />
        <span className="bottom-tooltip">Remove</span>
      </button>
    )
  );
}