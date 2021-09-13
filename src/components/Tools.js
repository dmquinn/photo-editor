import React from "react";
import ToolOptions from "./ToolOptions";
import "../stylesheets/ToolOptions.css";

const Tools = ({
  image,
  setFiltersTabOpen,
  setToolsTabOpen,
  toolsTabOpen,
  setContrast,
  setBrightness,
}) => {
  const handleClick = () => {
    setFiltersTabOpen(false);
    toolsTabOpen ? setToolsTabOpen(false) : setToolsTabOpen(true);
  };
  return (
    <div>
      <i className="fas fa-cogs" onClick={handleClick}></i>{" "}
      <ToolOptions
        image={image}
        toolsTabOpen={toolsTabOpen}
        setContrast={setContrast}
        setBrightness={setBrightness}
      />
    </div>
  );
};

export default Tools;
