import React from "react";

const MainPhoto = ({ image, mainFilter }) => {
  return (
    <>
      <img src={image} alt="" className={`mainPhoto ${mainFilter}`}></img>
    </>
  );
};

export default MainPhoto;
