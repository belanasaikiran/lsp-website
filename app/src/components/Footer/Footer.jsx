import React from "react";
import { FaLinkedin, FaTwitter, FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-1 bg-gray-800 pt-6 md:pt-12 fixed bottom-0 right-0 left-0   ">
      <div className="container px-4 mx-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/4 md:px-4">
            <h4 className="text-white text-2xl mb-4">LightSpeed Photonics</h4>
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
                <div className="flex flex-row ">
                  <div className="basis-1/2">
                    <a
                      href="#"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Products
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
                  </div>
                  <div className="basis-1/2">
                    <a
                      href="#"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      News
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Careers
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 py-1 block hover:underline"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* --- */}
          <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
            <div className="sm:flex">
              <div className="sm:flex-1 mt-4 sm:mt-0">
                <h6 className="text-base font-medium text-white uppercase mb-2">
                  Communication
                </h6>
                <div className="text-gray-400">
                  <FaLocationArrow /> LightSpeed Photonics Private Limited ©
                  2021 Registered Address: 111 Somerset Road, #08-10A, 111
                  Somerset, 238164 - Singapore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                &copy; 2022 <strong>LightSpeed Photonics</strong>
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="#"
                className="py-2 px-4 text-white inline-block hover:underline"
                target="_blank"
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
