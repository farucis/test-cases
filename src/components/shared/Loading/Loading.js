import React from "react";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="loading">
      <img
        src={
          "https://i.pinimg.com/originals/8b/34/b0/8b34b0ba0e40ad966d14ef1bdf63d3db.gif"
        }
        alt="loading..."
      />
    </div>
  );
};

export default Loading;
