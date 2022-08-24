import React from "react";
import YourNest from "../../assets/Investors/yournest-logo-1.jpeg";
import EF from "../../assets/Investors/ef_logo.png";
import IME from "../../assets/Investors/IME.jpg";
import GrowX from "../../assets/Investors/GrowX.png";
import Luminate from "../../assets/Investors/Luminate-NC-6-9-21-1000.jpg";

function Investors() {
  return (
    <div className="md:px-60 px-2 py-16 bg-gray-100">
      <div className="grid md:grid-cols-3 justify-items-end   ">
        <div className="pr-10 ">
          <img
            src={YourNest}
            className="md:w-64 md:h-64  "
            alt="YourNest Logo"
          />
        </div>
        <div className="px-4 col-span-2 grid grid-cols-1  ">
          <h1 className="text-4xl font-semibold  text-red-900">Your Nest</h1>
          <p className="text-x pb-2">
            YourNest is a sharply focused early-stage DeepTech VC fund from
            India, deploying from its second fund of US$ 45 mn to invest in
            Indian startups with a focus on DeepTech (IoT, AI/ML, Robotics,
            Cloud, Automation, etc) SaaS-oriented businesses building IP for
            global markets.
          </p>
          <a
            href="https://yournest.in/"
            target="_blank"
            className="font-semibold text-red-800 hover:text-black "
            rel="noreferrer"
          >
            {" "}
            More info &#62;{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Investors;
