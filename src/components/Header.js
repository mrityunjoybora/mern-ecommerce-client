import React from "react";
import { ArrowDropDown, Search, ShoppingCart } from "@material-ui/icons";

function Header() {
  return (
    <header className="shadow-lg top-0 sticky z-50 bg-white">
      <div className="flex md:px-20 sm:px-8 px-4 py-4 gap-4 ">
        <div className="flex sm:flex-1 flex-2 gap-10 items-center justify-start">
          <div className="md:flex flex-row items-center hidden">
            <span>EN</span>
            <ArrowDropDown className="cursor-pointer" />
          </div>
          <div className="flex gap-2 items-center md:border-2">
            <input
              className="outline-none px-2 py-1 w-[50%] md:block"
              type="text"
              placeholder="Search"
            />
            <div className="cursor-pointer  rounded-full p-1 ">
              <Search style={{ fontSize: 18 }} className="text-gray-500 " />
            </div>
          </div>
        </div>

        <div className="flex-1 text-2xl sm:text-4xl font-extrabold text-center px-8">
          BORACOM
        </div>

        <div className=" flex sm:flex-1 flex-2  items-center justify-end md:gap-8 sm:gap-4 gap-2 sm:text-lg text-xs font-medium ">
          <p className="cursor-pointer ">Register</p>
          <p className="cursor-pointer md:flex-shrink flex-shrink-0">Sign In</p>
          <ShoppingCart className="cursor-pointer" style={{ fontSize: 24 }} />
        </div>
      </div>
    </header>
  );
}

export default Header;
