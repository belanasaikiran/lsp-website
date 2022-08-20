import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.jpeg";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

function NavBar() {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => {
    setNav(!nav);
    // open navbar below
  };

  const handleClose = () => {
    setNav(false);
  };

  return (
    <div className="">
      <div className="w-full text-gray-700 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          {/* Nav Content */}
          <div className="p-4 flex flex-row items-center justify-between">
            <NavLink
              to="/"
              className=" uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              <img
                className="w-auto h-10 hover:scale-105 duration-500 "
                src={logo}
                alt="LightSpeedPhotonics"
              />
            </NavLink>
            <button
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline transition-all duration-500 ease-in-out"
              onClick={handleClick}
            >
              <svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
                {!nav ? <MenuIcon /> : <XIcon />}
              </svg>
            </button>
          </div>

          {/* NAV BAR */}

          <nav
            className={
              "flex-col md:flex md:justify-end md:flex-row w-full  lg:flex lg:items-center transition-all ease-in-out duration-500 " +
              (nav ? "flex h-max  " : "hidden  ")
            }
          >
            {/* small screens */}
            <NavLink
              to="/about"
              onClick={handleClose}
              className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  mx-2  md:mt-0 hover:scale-110 duration-300 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleClose}
              className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  mx-2  md:mt-0 hover:scale-110 duration-300 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Products
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleClose}
              className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  mx-2  md:mt-0 hover:scale-110 duration-300 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Company
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleClose}
              className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  mx-2  md:mt-0 hover:scale-110 duration-300 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Insights
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleClose}
              className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  mx-2  md:mt-0 hover:scale-110 duration-300 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Careers
            </NavLink>
            <NavLink
              to="/about"
              onClick={handleClose}
              className="px-4 py-2 mt-2 text-sm font-semibold text-gray-900  mx-2  md:mt-0 hover:scale-110 duration-300 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
            >
              Contact Us
            </NavLink>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
