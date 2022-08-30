import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { InvestorsInfo } from "../Azure/cdn";

function Investors() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <>
    <motion.div className="progress-bar" style={{ scaleX }} />
    <div className="md:px-80  px-2 pb-16 bg-gray-100">
      <h1 className="text-center py-20 text-5xl font-bold  uppercase">
        Our Investors
      </h1>
      {InvestorsInfo.map((investor) => (
        <div className="grid md:grid-cols-3 justify-items-center md:gap-0 gap-4   py-4 hover:scale-105 hover:bg-gray-200 hover:rounded-lg   duration-300 transition-all  ">
          <div className="md:pl-16 md:col-span-1 col-span-2   ">
            <img
              src={investor.image}
              className="md:w-64 md:h-64 w-full   "
              alt={investor.alt_name}
            />
          </div>
          <div className="px-4 col-span-2 grid grid-cols-1 md:gap-0 gap-4  content-around  ">
            <h1 className="md:text-4xl text-2xl font-base  text-red-900">
              {investor.CompanyName}
            </h1>
            <p className="text-x ">{investor.description}</p>
            <a
              href={investor.link}
              target="_blank"
              className="font-semibold text-red-800 hover:text-black "
              rel="noreferrer"
            >
              {" "}
              More info &#62;{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Investors;
