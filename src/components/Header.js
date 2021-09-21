import React from "react";
import Upload from "./Upload";
import logo from "../logo.svg";

const Header = ({ setImage }) => {
  return (
    <nav class="bg-white border-gray-200 px-20">
      <div class="sm:px-4 lg:px-5">
        <div class="flex items-center justify-between h-16 px-20">
          <div class="flex items-center sm:justify-start">
            <img src={logo} class="h-10 mr-4" alt="FlowBite Logo" />
            <div className=" px-20 mt-5">
              <Upload setImage={setImage} />
            </div>
          </div>
          <div class="flex items-center sm:static sm:inset-auto sm:ml-6"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
