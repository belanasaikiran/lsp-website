import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.jpeg";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import "./NavBar.css";

function NavBar() {
  const [nav, setNav] = useState(false);
  // open navbar below
  const handleClick = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <div className="sticky top-0 z-[1] drop-shadow-md">
      <div className="w-full  text-gray-500 bg-white backdrop-opacity-80 ">
        <div
          className="flex flex-col max-w-screen-xl  mx-auto lg:items-center lg:justify-between lg:flex-row md:px-6 lg:px-8"
        >
          {/* Nav Content */}
          <div className={"p-4 flex flex-row items-center justify-between"}>
            <NavLink
              onClick={handleClose}
              to="/"
              className=" uppercase rounded-lg dark-mode:text-white focus:outline-none focus:shadow-outline"
            >
              <img
                className="w-auto md:h-10 h-8 hover:scale-105 duration-500 "
                src={logo}
                alt="LightSpeedPhotonics"
              />
            </NavLink>
            <button
              className="lg:hidden rounded-lg focus:outline-none focus:shadow-outline transition-all duration-500 delay-300 ease-in-out"
              onClick={handleClick}
            >
              <svg
                fill="currentColor"
                viewBox="0 0 20 20"
                className="w-8 h-8 transition-all duration-500 delay-500 "
              >
                {!nav ? <MenuIcon /> : <XIcon />}
              </svg>
            </button>
          </div>

          {/* NAV BAR */}

          <nav
            className={
              "flex-col lg:flex lg:justify-end lg:flex-row w-full xl:flex xl:items-center transition-all delay-500 duration-500 ease-in-out " +
              (nav ? "flex h-full  " : "hidden  ")
            }
          >
            {/* Home */}
            <div className="group relative inline-block px-2 py-2">
              <NavLink
                to="/"
                onClick={handleClose}
                className="px-2  mt-2 text-base font-semibold text-gray-500  mx-2  md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
              >
                Home
              </NavLink>
            </div>

            {/* products */}
            <div className="group relative inline-block px-2">
              <button className="inline-flex peer items-center rounded py-2 px-4 font-semibold hover:text-gray-900 hover:underline decoration-red-900 decoration-4 hover:underline-offset-8 ">
                Products <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>

              <ul className=" hidden pt-1 text-gray-600 group-hover:block bg-gray-100 w-56 z-30 md:absolute ">
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                  <NavLink
                    onClick={handleClose}
                    to="/products/lightkonnect"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    LightKonnect&trade;
                  </NavLink>
                </li>
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                  <NavLink
                    onClick={handleClose}
                    to="/products/lightSiP"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    LightSiP&trade;
                  </NavLink>
                </li>

                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                  <NavLink
                    onClick={handleClose}
                    to="/products/lightkonnectFiber"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    LightKonnect Fiber&trade;
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="group relative inline-block px-2">
              <button className="inline-flex items-center rounded py-2 px-4 font-semibold hover:text-gray-900 hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                Company
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              <ul className="hidden pt-1 text-gray-600 group-hover:block bg-gray-100 w-64 z-30 md:absolute">
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                  <NavLink
                    onClick={handleClose}
                    to="/company/team"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    Team
                  </NavLink>
                </li>
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                  <NavLink
                    onClick={handleClose}
                    to="/company/collaborations&partners"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    Collaborations & Partners
                  </NavLink>
                </li>
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                  <NavLink
                    onClick={handleClose}
                    to="/company/investors"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    Investors
                  </NavLink>
                </li>
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                  <NavLink
                    onClick={handleClose}
                    to="/company/gallery"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    Gallery
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Insights */}
            <div className="group relative inline-block px-2">
              <button className="inline-flex items-center rounded py-2 px-4 font-semibold hover:text-gray-900 hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                Insights
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              <ul className=" hidden pt-1 text-gray-600 group-hover:block bg-gray-100 w-56 z-30 md:absolute">
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                <NavLink
                    onClick={handleClose}
                    to="/Insights/Publications"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    Publications
                  </NavLink>
                </li>
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                <NavLink
                    onClick={handleClose}
                    to="/Insights/Blog"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="py-2 px-4 whitespace-no-wrap block rounded-t   hover:text-gray-900 hover:font-medium hover:underline decoration-red-900 decoration-4 hover:underline-offset-8">
                <NavLink
                    onClick={handleClose}
                    to="/Insights/News"
                    className="  mt-2 text-base  text-gray-500    md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
                  >
                    News
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* Insights */}

            {/* Careers */}
            <div className="group relative inline-block px-2 py-2">
              <NavLink
                to="/about"
                onClick={handleClose}
                className="px-2  mt-2 text-base font-semibold text-gray-500  mx-2  md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
              >
                Careers
              </NavLink>
            </div>

            {/* Contact */}
            <div className="group relative inline-block px-2 py-2">
              <NavLink
                to="/contact"
                onClick={handleClose}
                className="px-2  mt-2 text-base font-semibold text-gray-500  mx-2  md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-red-900 decoration-4 hover:underline-offset-8"
              >
                Contact Us
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
