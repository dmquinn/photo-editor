import React from "react";
import ToolOptions from "./ToolOptions";

const Tools = ({
  image,
  setToolsTabOpen,
  toolsTabOpen,
  setContrast,
  setBrightness,
  setSaturation,
  setBlur,
}) => {
  const handleClick = () => {
    toolsTabOpen ? setToolsTabOpen(false) : setToolsTabOpen(true);
  };
  return (
    <div>
      <i
        className="fas fa-cogs text-gray-500 text-4xl"
        onClick={handleClick}
      ></i>{" "}
      <ToolOptions
        image={image}
        toolsTabOpen={toolsTabOpen}
        setContrast={setContrast}
        setBrightness={setBrightness}
        setSaturation={setSaturation}
        setBlur={setBlur}
      />
    </div>
  );
};

export default Tools;
