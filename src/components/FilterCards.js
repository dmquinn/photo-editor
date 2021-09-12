import React, { useState } from "react";
import imageObjects from "../imageObjects";

const ImageCard = ({ image, filtersTabOpen, setMainFilter }) => {
  const handleClick = (e) => {
    setMainFilter(e.target.className);
  };
  return (
    <div
      className="filtersContainer"
      style={{ visibility: filtersTabOpen ? "visible" : "hidden" }}
    >
      {imageObjects.map((card, i) => {
        return (
          <div
            className={card.className}
            onClick={(e) => handleClick(e)}
            style={{ padding: "20px" }}
          >
            <div
              className="imgContainer"
              style={{
                backgroundImage: `url(${image})`,
                pointerEvents: "none",
              }}
              key={i}
            >
              <h3>{card.title}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ImageCard;
