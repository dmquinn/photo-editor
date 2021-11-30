import React, { Dispatch, SetStateAction } from "react";
import Upload from "./Upload";
import logo from "../logo.svg";
interface Props {
  setImage: Dispatch<SetStateAction<string>>
}
const Header:React.FC<Props> = ({ setImage }) => {
  return (
    <nav className="bg-white border-gray-200 px-20">
      <div className="sm:px-4 lg:px-5">
        <div className="flex items-center justify-between h-16 px-20">
          <div className="flex items-center sm:justify-start">
            <img src={logo} className="h-10 mr-4" alt="FlowBite Logo" />
            <div className=" px-20 mt-5">
              <Upload setImage={setImage} />
            </div>
          </div>
          <div className="flex items-center sm:static sm:inset-auto sm:ml-6"></div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
