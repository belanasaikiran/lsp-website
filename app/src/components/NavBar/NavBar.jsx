import React from "react";
import { NavLink } from "react-router-dom";
import logo from "./logo.jpeg";
import { MenuIcon, XIcon, ChevronDownIcon } from "@heroicons/react/outline";
import "./NavBar.css";

function NavBar() {
  const [nav, setNav] = React.useState(false);

  const handleClick = () => {
    setNav(!nav);
    // open navbar below
  };

  const handleClose = () => {
    setNav(false);
  };

  // Expand navbar on mobile
  const navbar = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1",
    transition: "all 0.3s ease-in-out",
    transform: nav ? "translateX(0)" : "translateX(-100%)",
  };

  return (
    <div className="sticky top-0 z-[1] drop-shadow-md ">
      <div className="w-full  text-gray-500 bg-white dark-mode:text-gray-200 dark-mode:bg-gray-800">
        <div className="flex flex-col max-w-screen-xl  mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          {/* Nav Content */}
          <div className="p-4 flex flex-row items-center justify-between">
            <NavLink
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
              className="md:hidden rounded-lg focus:outline-none focus:shadow-outline transition-all duration-500 delay-300 ease-in-out"
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
              "flex-col md:flex md:justify-end md:flex-row w-full lg:flex lg:items-center transition-all delay-500 duration-500 ease-in-out " +
              (nav ? "flex h-full  " : "hidden  ")
            }
          >
            <div class="group relative inline-block px-2">
              <button class="inline-flex peer items-center rounded py-2 px-4 font-semibold hover:text-gray-900 hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8 ">
                Products <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>

              <ul class=" hidden pt-1 text-gray-600 group-hover:block bg-gray-100 w-56 z-30 md:absolute ">
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                    href="#_"
                  >
                    LightKonnect
                  </a>
                </li>
                <li class="">
                  <a
                    href="#_"
                    target="_blank"
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                  >
                    LightSiP
                  </a>
                </li>
                <li class="">
                  <a
                    href="#_"
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                  >
                    LightKonnect Fiber
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div class="group relative inline-block px-2">
              <button class="inline-flex items-center rounded py-2 px-4 font-semibold hover:text-gray-900 hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8">
                Company
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              <ul class="hidden pt-1 text-gray-600 group-hover:block bg-gray-100 w-64 z-30 md:absolute">
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                    href="#_"
                  >
                    Team
                  </a>
                </li>
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                    href="#_"
                  >
                    Collaborations & Partners
                  </a>
                </li>
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                    href="#_"
                  >
                    Investors
                  </a>
                </li>
              </ul>
            </div>
            {/* Insights */}
            <div class="group relative inline-block px-2">
              <button class="inline-flex items-center rounded py-2 px-4 font-semibold hover:text-gray-900 hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8">
                Insights
                <ChevronDownIcon className="w-4 h-4 ml-1" />
              </button>
              <ul class=" hidden pt-1 text-gray-600 group-hover:block bg-gray-100 w-56 z-30 md:absolute">
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8 hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                    href="#_"
                  >
                    Publications
                  </a>
                </li>
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8 hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                    href="#_"
                  >
                    Blog
                  </a>
                </li>
                <li class="">
                  <a
                    class="whitespace-no-wrap block rounded-t  py-2 px-4 hover:text-gray-900 hover:font-medium hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8 hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
                    href="#_"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
            {/* Insights */}

            {/* Careers */}
            <div class="group relative inline-block px-2 py-2">
              <NavLink
                to="/about"
                onClick={handleClose}
                className="px-2  mt-2 text-base font-semibold text-gray-500  mx-2  md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
              >
                Careers
              </NavLink>
            </div>

            {/* Contact */}
            <div class="group relative inline-block px-2 py-2">
              <NavLink
                to="/about"
                onClick={handleClose}
                className="px-2  mt-2 text-base font-semibold text-gray-500  mx-2  md:mt-0  duration-300 md:rounded hover:text-gray-900  focus:outline-none focus:shadow-outline hover:underline decoration-orange-700 decoration-4 hover:underline-offset-8"
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
