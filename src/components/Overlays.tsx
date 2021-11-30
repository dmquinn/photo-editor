import React, { Dispatch, SetStateAction } from "react";
import OverlayCards from "./OverlayCards";

interface Props {
  overlaysTabOpen: boolean,
  setOverlaysTabOpen: Dispatch<SetStateAction<boolean>>,
  image: string,
  setMainOverlay: Dispatch<SetStateAction<string>>
}
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
          className="far fa-clone text-gray-500 text-4xl"
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
