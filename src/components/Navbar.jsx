import React from "react";
import image from "../constant/image";
import { NavLink } from "react-router-dom";
import Navlinks from "./Navlinks";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { GrCart } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../features/User/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <nav className="bg-base-200">
      <div className="navbar md:align-element">
        <div className="navbar-start">
          <NavLink className="justify-center items-center hidden lg:flex">
            <img src={image.logo} alt="" className="w-10 h-10 object-contain" />
            <h4 className="text-xl font-semibold">Organick</h4>
          </NavLink>
          {/* DROPDOWN */}
          <div className="dropdown">
            <label
              tabIndex={0}
              role="botton"
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
        <section className="navbar-end flex gap-2">
          <div>
            <div className="grid place-items-center">
              <div className=" h-[35px] w-[35px] border grid place-content-center text-center rounded-full items-center hover:shadow-md transition duration-300 cursor-pointer bg-[#7EB693]">
                <p className="text-[#fff] text-center text-xl">
                  <IoIosSearch />
                </p>
              </div>
            </div>
          </div>
          <main className="flex border justify-between rounded-full p-1 gap-4 place-items-center">
            <div className="grid place-items-center">
              <div className=" h-[35px] w-[35px] border grid place-content-center text-center rounded-full items-center hover:shadow-md transition duration-300 cursor-pointer bg-[#274C5B]">
                <p className="text-[#fff] text-center text-xl">
                  <GrCart />
                </p>
              </div>
            </div>
            <h4 className="text-sm font-bold text-[#274C5B]">Cart (0)</h4>
          </main>
        </section>
      </div>
      {/* <div className=" align-element">
        <button className="btn" onClick={() => dispatch(logOut())}>
          logout
        </button>
        {user ? (
          <div className=" bg-green-lightbg p-3 rounded-xl w-fit float-right my-2">
            <h3 className=" font-bold text-sm ">
              Welcome {user.displayName} ✅
            </h3>
          </div>
        ) : (
          ""
        )}
      </div> */}
    </nav>
  );
};

export default Navbar;

9044644200;
