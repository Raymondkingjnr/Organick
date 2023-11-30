import React from "react";
import image from "../constant/image";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";
import { FaBarsStaggered } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          <NavLink className="justify-center items-center hidden lg:flex">
            <img src={image.logo} alt="" className="w-10 h-10 object-contain" />
            <h4 className="text-xl font-semibold">Organick</h4>
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label
              tabIndex={0}
              role="btton"
              className="btn btn-success lg:hidden"
            >
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <Navlinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <Navlinks />
          </ul>
        </div>
        <div className="navbar-end">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ade1a8-7c89-4acc-b683-2151a597fb3a?apiKey=e6d0dd2523eb4c09bec414f19a613dec&"
            className="aspect-square w-10 h-10 object-contain cursor-pointer overflow-hidden"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
