import React from "react";
import { FaLinkedin, FaTwitter, FaLocationArrow } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-1 bg-gray-800 pt-6 md:pt-12  bottom-0 right-0 left-0   ">
      <div className="container px-4 mx-auto md:px-16">
        <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
          <div className="footer-info lg:w-1/3 md:px-4">
            <h4 className="text-white text-2xl mb-4">LightSpeed Photonics</h4>
            <p className="text-gray-400">
              Building Lego-Like OptoElectronic Processors & Interconnects for
              Data Bandwidth Intensive Applications that require real-time
              processing.
            </p>
            <div className="mt-4">
              <button
                className="bg-linkedin py-2 px-4 text-white rounded mt-2 transition-colors duration-300"
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/company/lightspeedai/",
                    "_blank"
                  )
                }
              >
                <FaLinkedin />
              </button>
              <button
                className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300"
                onClick={() =>
                  window.open("https://twitter.com/LSPhotonics", "_blank")
                }
              >
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
                    <a href="#_" className="text-gray-400 py-1 block  ">
                      Products
                    </a>
                    <a href="#_" className="text-gray-400 py-1 block  ">
                      Company
                    </a>

                    <a href="#_" className="text-gray-400 py-1 block  ">
                      Team
                    </a>
                  </div>
                  <div className="basis-1/2">
                    <a href="#_" className="text-gray-400 py-1 block  ">
                      News
                    </a>
                    <a href="#_" className="text-gray-400 py-1 block  ">
                      Careers
                    </a>
                    <a href="#_" className="text-gray-400 py-1 block ">
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
                <div className="text-gray-400 inline-flex">
                  <span>
                    <a
                      target="_blank"
                      href="https://goo.gl/maps/TTo32KsHuFgB9yWq7"
                      rel="noreferrer"
                    >
                      <FaLocationArrow className="mr-2 mt-1" />
                    </a>
                  </span>{" "}
                  LightSpeed Photonics Private Limited © 2021 Registered
                  Address: 111 Somerset Road, #08-10A, 111 Somerset, 238164 -
                  Singapore
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-solid border-gray-900 mt-4 py-4 text-white ">
        <div className="container px-4 mx-auto md:px-16">
          <div className="md:flex md:-mx-4 md:items-center">
            <div className="md:flex-1 md:px-4 text-center md:text-left">
              <p className="text-white">
                &copy; 2022 <strong>LightSpeed Photonics Pvt. Ltd. </strong>
              </p>
            </div>
            <div className="md:flex-1 md:px-4 text-center md:text-right">
              <a
                href="#_"
                className="py-2 px-4 text-white inline-block  "
                target="_blank"
                rel="noreferrer"
              >
                Terms of Service
              </a>
              <a
                href="#_"
                className="py-2 px-4 text-white inline-block  "
                rel="noreferrer"
                target="_blank"
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
