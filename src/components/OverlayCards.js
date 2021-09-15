import React from "react";
import overlayObjects from "../overlayObjects";

const OverlayCards = ({
  overlaysTabOpen,
  image,
  setMainOverlay,
  mainOverlay,
}) => {
  const handleClick = (e) => {
    console.log("clicked");
    setMainOverlay(e.target.value);
  };
  return (
    <div
      className="grid grid-cols-3 gap-1 gap-y-10"
      style={{ visibility: overlaysTabOpen ? "visible" : "hidden" }}
    >
      {overlayObjects.map((card, i) => {
        return (
          <div
            className="overlayContainer"
            style={{
              backgroundImage: `url(${image})`,
            }}
          >
            <div
              className={card.className}
              key={i}
              onClick={(e) => handleClick(e)}
            >
              <h3 className="p-5" style={{ pointerEvents: "none" }}>
                {card.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OverlayCards;
