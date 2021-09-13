import React from "react";

const MainPhoto = ({ image, mainFilter, contrast, brightness }) => {
  return (
    <>
      <img
        src={image}
        alt=""
        className={`mainPhoto ${mainFilter}`}
        style={{
          filter:
            contrast !== undefined &&
            brightness !== undefined &&
            `contrast(${contrast}%) brightness(${brightness}%)`,
        }}
      ></img>
    </>
  );
};

export default MainPhoto;
