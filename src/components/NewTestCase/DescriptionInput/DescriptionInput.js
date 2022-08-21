import React from "react";
import { Icon } from "@iconify/react";
import "./DescriptionInput.css";

const DescriptionInput = () => {
  const [bold, setBold] = React.useState(false);
  const [italic, setItalic] = React.useState(false);
  const [fontSize, setFontSize] = React.useState("16px");

  const descriptionInput = document.getElementById("descriptionInput");
  if (descriptionInput) {
    descriptionInput.style.fontWeight = bold ? "bold" : "normal";
    descriptionInput.style.fontStyle = italic ? "italic" : "normal";
    descriptionInput.style.fontSize = fontSize;

    document.addEventListener("click", function (event) {
      var Element = document.getElementById("inputEffects");
      var isClickInsideElement = Element?.contains(event.target);
      if (isClickInsideElement) {
        descriptionInput.focus();
      }
    });
  }

  //descriptionInput.focus();
  return (
    <label className="description-input-container">
      <input id="descriptionInput" type="textarea" />
      <span className="input-label">description</span>
      <label id="inputEffects" className="input-effects">
        <BoldButton bold={bold} setBold={setBold} />
        <ItalicButton italic={italic} setItalic={setItalic} />
        <AttachButton />
        <FontSizeSelector fontSize={fontSize} setFontSize={setFontSize} />
      </label>
    </label>
  );
};

export default DescriptionInput;

const BoldButton = ({ bold, setBold }) => {
  return (
    <button
      className="input-effects-button"
      style={bold ? { fontWeight: "900", fontSize: "20px" } : {}}
      onClick={() => setBold(!bold)}
    >
      <Icon icon="fluent:text-bold-24-regular" />
    </button>
  );
};

const ItalicButton = ({ italic, setItalic }) => {
  return (
    <button
      className="input-effects-button"
      style={italic ? { fontWeight: "900", fontSize: "20px" } : {}}
      onClick={() => setItalic(!italic)}
    >
      <Icon icon="ant-design:italic-outlined" />
    </button>
  );
};

const AttachButton = () => {
  return (
    <button className="input-effects-button" onClick={() => {}}>
      <label>
        <span style={{ cursor: "pointer" }}>
          <Icon icon="ic:twotone-attach-file" />
        </span>
        <input type="file" className="custom-file-input" />
      </label>
    </button>
  );
};

const FontSizeSelector = ({ fontSize, setFontSize }) => {
  return (
    <button className="input-effects-button" onClick={() => {}}>
      <label>
        <input
          type="number"
          min="16"
          max="40"
          onChange={(e) => {
            setFontSize(e.target.value + "px");
          }}
          placeholder="16"
          style={{ border: "none", fontSize: "14px", cursor: "pointer" }}
        />
      </label>
    </button>
  );
};
