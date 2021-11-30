import React, { Dispatch, SetStateAction } from "react";
import "../stylesheets/Sliders.css";

interface Props {
  toolsTabOpen: boolean,
  setContrast: Dispatch<SetStateAction<number>>
  setBrightness: Dispatch<SetStateAction<number>>
  setSaturation: Dispatch<SetStateAction<number>>


}
const ToolOptions = ({
  toolsTabOpen,
  setContrast,
  setBrightness,
  setSaturation,
}) => {
  return (
    <div
      style={{ visibility: toolsTabOpen ? "visible" : "hidden" }}
      className="px-20"
    >
      <div className="sliderContainer">
        <p className="text-white p-1">Contrast</p>
        <input
          min="20"
          max="200"
          type="range"
          onChange={(e) => setContrast(e.target.value)}
          className="slider"
        ></input>
      </div>
      
      <div className="sliderContainer">
        <p className="text-white p-1">Saturation</p>

        <input
          min="20"
          max="200"
          type="range"
          className="slider"
          onChange={(e) => setSaturation(e.target.value)}
        ></input>
      </div>

      <div className="sliderContainer">
        <p className="text-white p-1">Brightness</p>

        <input
          min="20"
          max="200"
          type="range"
          className="slider"
          onChange={(e) => setBrightness(e.target.value)}
        ></input>
      </div>
    
    </div>
  );
};

export default ToolOptions;
