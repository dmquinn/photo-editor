import React from "react";
import "../stylesheets/Header.css";
import Upload from "./Upload";

const Header = ({ setImage }) => {
  return (
    <div className="header">
      <h4>PFILTER PFERD</h4>
      <Upload setImage={setImage} />
      <h6>Photo Editor</h6>
    </div>
  );
};

export default Header;
