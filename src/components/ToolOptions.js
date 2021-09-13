import React from "react";
import "../stylesheets/ToolOptions.css";

const ToolOptions = ({ toolsTabOpen, setContrast, setBrightness }) => {
  return (
    <div
      style={{ visibility: toolsTabOpen ? "visible" : "hidden" }}
      className="toolOptions"
    >
      <div className="sliderContainer">
        <input
          min="0"
          max="200"
          type="range"
          onChange={(e) => setContrast(e.target.value)}
          className="slider"
        ></input>
      </div>
      <div className="sliderContainer">
        <input
          min="0"
          max="200"
          type="range"
          className="slider"
          onChange={(e) => setBrightness(e.target.value)}
        ></input>
      </div>
      <div className="sliderContainer">
        <input type="range" className="slider"></input>
      </div>
      <div className="sliderContainer">
        <input type="range" className="slider"></input>
      </div>
    </div>
  );
};

export default ToolOptions;
