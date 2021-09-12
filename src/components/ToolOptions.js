import React from "react";

const ToolOptions = ({ toolsTabOpen }) => {
  return (
    <div
      style={{ visibility: toolsTabOpen ? "visible" : "hidden" }}
      className="toolOptions"
    >
      <input type="range"></input>
      <input type="range"></input>
      <input type="range"></input>
      <input type="range"></input>
    </div>
  );
};

export default ToolOptions;
