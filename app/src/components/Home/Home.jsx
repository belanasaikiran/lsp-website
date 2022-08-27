import React from "react";
import { motion } from "framer-motion";
import { VscRadioTower } from "react-icons/vsc";
import { FaServer } from "react-icons/fa";
import { GrCloudComputer } from "react-icons/gr";
import { MdOutlineDeveloperBoard, MdCastForEducation } from "react-icons/md";

import CDN, { InvestorsInfo } from "../Azure/cdn";

// Need to add all images to Azure CDN
const SIP = `${CDN}/Homepage/2legoSIP2.png`;
// console.log(InvestorImages[0].GrowX);

function Home() {
  return (
    <div>
      <div
        className="grid md:grid-flow-col  md:gap-4 md:px-60 px-2 md:py-28 py-12  bg-cover bg-gray-200 h-164"
      >
        <div className="md:grid grid-col-1 text-black content-center pt-1 md:pt-8 md:col-span-1 col-span-2">
          <h1 className="md:text-6xl text-4xl  text-semibold font-bold md:text-left text-center md:leading-[4rem] py-4 ">
            Bringing{" "}
            <span className="bg-gradient-to-r text-red-800   hover:scale-110   ">
              Light
            </span>{" "}
            to the Computing World !
          </h1>
          <p className="md:text-3xl pt-8 md:text-left text-center">
            Building Lego-Like Optoelectronic Processors and Interconnects for
            DataCenters and near-Edge Compute
          </p>
        </div>
        <div className="col-span-2 ">
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <img src={SIP} alt="laser" className="  hover:drop-shadow-2xl " />
          </motion.div>
        </div>
      </div>

      {/* Section -2 */}
      <div>
        <div className="md:px-72 px-2 py-32  bg-red-900 ">
          <div className=" text-gray-100  items-center text-center pt-1 md:pt-8 ">
            <h1 className="md:text-5xl text-white text-3xl  text-semibold font-bold text-center md:leading-[4rem] uppercase  ">
              At LightSpeed Photonics,
            </h1>
            <p className="md:text-2xl pt-16  px-5 ">
              We combine optical interconnects with Processors to build a
              modular{" "}
              <span className="text-white font-black md:text-3xl">
                compute+interconnect
              </span>{" "}
              heterogeneous System-in-Package (SiP),{" "}
              <span className="text-white font-black md:text-3xl">
                LightSiP™
              </span>{" "}
              resulting in a scalable server reducing data latency, footprint,
              power consumption while increasing the data bandwidth and
              performance per watt. It incorporates proprietary high data rate
              free-space optical interconnect,{" "}
              <span className="text-white font-black md:text-3xl">
                LightKonnect™
              </span>{" "}
              for protocol agnostic chip-to-chip communication. 
            </p>
            <p className="md:text-2xl pt-8  px-5 ">
              Reconfigurable electronics provides the computing power and optics
              provides the interconnect and together, the LightSiP provides upto
              <span className="font-black md:text-3xl"> 20x</span> performance
              at half the power.
            </p>
          </div>
        </div>
      </div>

      {/* Section-3 */}
      <div className="md:px-60 px-2 py-12">
        <div className="pb-16">
          <h1 className="md:text-4xl text-3xl  text-semibold font-bold text-center md:leading-[4rem] text-red-800 ">
            WHO MAY BENEFIT FROM US
          </h1>
        </div>
        <div className="grid md:grid-cols-3   gap-4 text-center">
          {/* Telecom */}
          <div className="flex flex-col items-center py-4 gap-4">
            <FaServer className="w-28 h-28 " />
            <h2 className="text-2xl font-medium">
              DATA CENTERs & I<span className="text-sm">AA</span>S
            </h2>
            {/* <p className="text-left">Description</p> */}
          </div>
          <div className="flex flex-col items-center py-4 gap-4">
            <VscRadioTower className="w-28 h-28 " />
            <h2 className="text-2xl font-medium">TELECOM & 5G</h2>
            {/* <p className="text-left">Description</p> */}
          </div>
          <div className="flex flex-col items-center py-4 gap-4">
            <GrCloudComputer className="w-28 h-28 " />
            <h2 className="text-2xl font-medium">EDGE COMPUTING</h2>
            {/* <p className="text-left">Description</p> */}
          </div>
        </div>
        {/* <div className="flex flex-col items-center py-4 gap-4">
            <GiDefenseSatellite className="w-28 h-28 " />
            <h2 className="text-2xl font-medium">DEFENCE</h2>
            <p className="text-left">Description</p>
          </div> */}
        <div className="grid md:grid-cols-2 md:py-16  text-center">
          <div className="flex flex-col items-center py-4 gap-4">
            <MdOutlineDeveloperBoard className="w-28 h-28 " />
            <h2 className="text-2xl font-medium">RESEARCH & DEVELOPMENT</h2>
            {/* <p className="text-left">Description</p> */}
          </div>
          <div className="flex flex-col items-center py-4 gap-4">
            <MdCastForEducation className="w-28 h-28 " />
            <h2 className="text-2xl font-medium">EDUCATION</h2>
            {/* <p className="text-left">Description</p> */}
          </div>
        </div>
      </div>

      {/* Section - 4 -> Investors */}
      <div className="md:px-60 px-2 py-12 bg-gray-100">
        <div className="pb-16">
          <h1 className="md:text-4xl text-3xl  text-semibold font-bold text-center md:leading-[4rem] text-red-800 uppercase ">
            Our Investors
          </h1>

          <div className="grid md:grid-cols-5 md:text-base text-2xl  gap-5 justify-items-center text-center pt-14">
            {InvestorsInfo.map((investors) => (
              <div className="hover:scale-105 duration-300 transition-all hover:drop-shadow-xl text-center ">
                <a
                  href={investors.link}
                  key="{investors}"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold  text-lg  "
                >
                  <img
                    key="{investors}"
                    src={investors.image}
                    alt={investors.alt_name}
                    className="md:w-32 md:h-32 md:p-0  p-5 mb-4 drop-shadow-lg block m-auto bg-white "
                  />
                  {investors.CompanyName}
                </a>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="text-center pt-16   ">
            <p className="text-xl font-medium">
              {" "}
              Want to Partner with us ? <span> </span>
            </p>
          </div> */}
      </div>
    </div>
  );
}

export default Home;
