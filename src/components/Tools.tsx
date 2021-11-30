import React, { Dispatch, SetStateAction } from "react";
import ToolOptions from "./ToolOptions";
interface Props {
  image: string,
  toolsTabOpen: boolean,
  setToolsTabOpen: Dispatch<SetStateAction<boolean>>
  setContrast: Dispatch<SetStateAction<number>>
  setBrightness:Dispatch<SetStateAction<number>>
  setSaturation:Dispatch<SetStateAction<number>>


}
const Tools: React.FC<Props> = ({
  image,
  setToolsTabOpen,
  toolsTabOpen,
  setContrast,
  setBrightness,
  setSaturation,
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
        toolsTabOpen={toolsTabOpen}
        setContrast={setContrast}
        setBrightness={setBrightness}
        setSaturation={setSaturation}
      />
    </div>
  );
};

export default Tools;
