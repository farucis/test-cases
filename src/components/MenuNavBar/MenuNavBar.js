import React from "react";
import "./MenuNavBar.css";
import useStore from "../../StateMan/store";

import { Icon } from "@iconify/react";

//--------Export Default MenuNavBar--------//
const MenuNavBar = ({ isSelected, setIsSelected }) => {
  return (
    <div className="navBar-container">
      <div className="navBar-parent">
        <div className="top-icons">
          <CircleIcon logo={true} />
          <CircleIcon text="FI" />
        </div>
        <div className="navBar-line" />
        <NavBarButtons isSelected={isSelected} setIsSelected={setIsSelected} />
      </div>
    </div>
  );
};

export default MenuNavBar;

//--------Help Components--------//
//----Circle Icon----//
const CircleIcon = (props) => {
  return (
    <div
      className="circle-icon"
      style={props.logo ? null : { marginTop: "10px" }}
    >
      {props.logo ? (
        <div className="circle-icon-logo" />
      ) : (
        <h1>{props.text}</h1>
      )}
    </div>
  );
};

//----NavBar Buttons----//
export const navBarButtons = [
  {
    name: "Tests",
    tooltip: "Test Development",
    icon: "ph:note-pencil-light",
  },
  {
    name: "Suites",
    tooltip: "Suite",
    icon: "uit:bag",
  },
];
const NavBarButtons = ({ isSelected, setIsSelected }) => {
  const setFilterIsOpen = useStore((state) => state.setFilterIsOpen);

  return (
    <nav className="navBar-buttons">
      {navBarButtons.map((button, index) => (
        <button
          key={index}
          className={isSelected === button.name ? "btn-selected" : "btn"}
          onClick={() => {
            setIsSelected(button.name);
            setFilterIsOpen(false);
          }}
        >
          <Icon icon={button.icon} />
          <span className="right-tooltip">{button.tooltip}</span>
        </button>
      ))}
    </nav>
  );
};
