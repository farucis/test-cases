import React from "react";
import "./MenuNavBar.css";

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
    icon: "ph:note-pencil-light",
  },
  {
    name: "Suites",
    icon: "uit:bag",
  },
];
const NavBarButtons = ({ isSelected, setIsSelected }) => {
  return (
    <nav className="navBar-buttons">
      {navBarButtons.map((button, index) => (
        <button
          key={index}
          className={isSelected === button.name ? "btn-selected" : "btn"}
          onClick={() => setIsSelected(button.name)}
        >
          <Icon icon={button.icon} />
          <span className="right-tooltip">{button.name}</span>
        </button>
      ))}
    </nav>
  );
};