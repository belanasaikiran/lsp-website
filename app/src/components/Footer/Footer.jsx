import React from "react";
import { FaLinkedin, FaTwitter, FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-1 bg-gray-800 pt-6 md:pt-12   fixed bottom-0 right-0 left-0   ">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/3 md:px-4">
            <h4 className="text-white text-2xl mb-4">LightSpeedAI Labs</h4>
            <p className="text-gray-400">
              Building Lego-Like OptoElectronic Processors & Interconnects for
              Data Bandwidth Intensive Applications that require real-time
              processing.
            </p>
            <div className="mt-4">
              <button className="bg-linkedin py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                <FaLinkedin />
              </button>
              <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                <FaTwitter />
              </button>
            </div>
          </div>

          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  About
                </h6>
                <div>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Company
                  </a>

                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    Team
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 py-1 block hover:underline"
                  >
                    News
                  </a>
                </div>
              </div>
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  Communication
                </h6>
                <div className="text-gray-400">
                  <span>
                    {" "}
                    <FaLocationArrow />{" "}
                  </span>
                  LightSpeedAI Labs Private Limited © 2019-2021 Registered
                  Address: LightSpeedAI Labs Private Limited, 1st Floor,
                  No677,Suite 609, 13th Cross, 27th Main, SECTOR 1, HSR Layout,
                  Bengaluru -560102, Karnataka, India
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
            <h5 className="text-lg text-white font-medium mb-4">
              Want to know more about us ?
            </h5>
            <button className="bg-indigo-600 text-white hover:bg-indigo-700 rounded py-2 px-6 md:px-12 transition-colors duration-300">
              Schedule a Call
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                &copy; <strong>LightSpeedAI Labs</strong>
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
