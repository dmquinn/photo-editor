import React, { useState } from "react";
import ToolOptions from "./ToolOptions";

const Tools = ({ image, setFiltersTabOpen }) => {
  const [toolsTabOpen, setToolsTabOpen] = useState(false);
  const handleClick = () => {
    toolsTabOpen ? setToolsTabOpen(false) : setToolsTabOpen(true);
    setFiltersTabOpen(false);
  };
  return (
    <div>
      <i className="fas fa-cogs" onClick={handleClick}></i>{" "}
      <ToolOptions image={image} toolsTabOpen={toolsTabOpen} />
    </div>
  );
};

export default Tools;
