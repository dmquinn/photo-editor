import React from "react";
import Upload from "./Upload";
import logo from "../logo.svg";

const Header = ({ setImage }) => {
  return (
    <nav class="bg-white border-gray-200 px-20">
      <div class="sm:px-4 lg:px-5">
        <div class="flex items-center justify-between h-16 px-20">
          {/* <!-- Logo --> */}
          <div class="flex items-center sm:justify-start">
            <a href="#">
              <img src={logo} class="h-10 mr-4" alt="FlowBite Logo" />
            </a>
            <div class="hidden sm:block sm:ml-6"></div>
          </div>
          <div class="flex items-center sm:static sm:inset-auto sm:ml-6">
            <button class="text-gray-500 hover:text-gray-900 mr-3">
              <span class="sr-only">View notifications</span>
              {/* <!-- Bell icon --> */}
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
              </svg>
            </button>
            {/* <!-- Profile dropdown --> */}
          </div>
        </div>
      </div>
      {/* <!-- Mobile menu --> */}
      <div class="sm:hidden hidden" id="mobile-menu-2">
        <ul class="pt-2">
          <li>
            <a
              href="#"
              class="bg-gray-100 text-gray-900 text-base font-normal block pl-3 pr-4 py-2"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2"
            >
              Team
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-600 hover:bg-gray-50 border-b border-gray-100 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              class="text-gray-600 hover:bg-gray-50 text-base font-normal hover:border-gray-300 hover:text-gray-900 block px-3 py-2"
            >
              Calendar
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
