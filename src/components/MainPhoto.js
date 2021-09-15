import React from "react";

const MainPhoto = ({
  image,
  mainFilter,
  contrast,
  brightness,
  saturation,
  mainOverlay,
}) => {
  const filterGetter = () => {
    if (
      contrast !== undefined &&
      brightness !== undefined &&
      saturation !== undefined
    ) {
      return `contrast(${contrast}%) brightness(${brightness}%) saturate(${saturation}%)`;
    } else if (contrast !== undefined) {
      return `contrast(${contrast}%)`;
    } else if (brightness !== undefined) {
      return `brightness(${brightness}%)`;
    } else if (saturation !== undefined) {
      return `saturate(${saturation}%)`;
    }
  };

  return (
    <div className="h-3/5">
      <img
        src={image}
        alt=""
        className={`mainPhoto ${mainFilter} my-20 object-cover ${mainOverlay}`}
        style={{
          filter: filterGetter(),
          // boxShadow: contrast < 50 && "0px 0px 80px 50px rgb(0 0 0 / 0.281)",
        }}
      ></img>
    </div>
  );
};

export default MainPhoto;
