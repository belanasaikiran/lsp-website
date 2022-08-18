import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./LightSpeedAI-Labs-v5-dark-01.png";
import { Transition } from "@headlessui/react";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
// import Example from "../Tailwind_Tests/test1"

function NavBar() {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false);
  };

  return (
    <div className=" sticking ">
      <nav className="flex justify-between flex-wrap bg-slate-900 p-2  z-50  ">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img className="w-auto h-12" src={logo} alt="lightspeedai" />
        </div>
        <div className="block lg:hidden">
          <button
            className="flex border  items-center px-3 py-2 nav-toggler transition duration-1000 ease-in-out rounded-lg text-white hover:text-white hover:bg-slate-900 focus:outline-none focus:shadow-outline navbar-menu-toggle"
            // add toggle to navbar for mobile
            onClick={handleClick}
          >
            {!nav ? <MenuIcon className="w-5" /> : <XIcon className="w-5" />}

            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </button>
        </div>

        <div
          className={`${
            nav ? "block" : "hidden"
          } w-full flex-grow lg:flex lg:items-center lg:w-auto nav-list transition-all duration-500 transform translate-x-0 mobile-menu-animation`}
        >
          {/* small screens */}
          <div className="text-sm lg:flex-grow" id="n">
            <NavLink
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 focus-shadow-outline transition duration-500 ease-in-out"
              to="/"
              onClick={handleClose}
            >
              Home
            </NavLink>
            <NavLink
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              to="/team"
              onClick={handleClose}
            >
              Team
            </NavLink>
            <NavLink
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              to="/news"
              onClick={handleClose}
            >
              News
            </NavLink>
            <NavLink
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4"
              to="/scheduleCall"
              onClick={handleClose}
            >
              Schedule Call
            </NavLink>
          </div>
          <div>
            <NavLink
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              to="/contact"
              onClick={handleClose}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
