import React from "react";
import OverlayCards from "./OverlayCards";

const Filters = ({
  overlaysTabOpen,
  setOverlaysTabOpen,
  image,
  setMainOverlay,
}) => {
  const handleClick = () => {
    overlaysTabOpen ? setOverlaysTabOpen(false) : setOverlaysTabOpen(true);
  };
  return (
    <>
      <div className="flex justify-end">
        <i
          class="far fa-clone text-gray-500 text-4xl"
          onClick={handleClick}
        ></i>
      </div>
      <OverlayCards
        overlaysTabOpen={overlaysTabOpen}
        image={image}
        setMainOverlay={setMainOverlay}
      />
    </>
  );
};

export default Filters;
