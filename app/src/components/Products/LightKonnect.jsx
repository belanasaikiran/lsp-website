import React from "react";
import { motion } from "framer-motion";
import LKImage from "../../assets/Products/LSAI-A0001-02-01.1.png";

function LightKonnect() {
  return (
    <div className=" py-10 md:px-64 ">
      <div className="grid md:grid-cols-2  py-6 ">
        <div className="md:pl-20">
          <motion.div
            className="box"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            <img
              src={LKImage}
              alt="LightKonnect"
              className=" hover:drop-shadow-2xl"
            />
          </motion.div>
        </div>
        <div className="">
          <div className=" md:py-16 py-4 md:px-0 md:pl-10 px-10 gap-2 text-left align-center justify-evenly   ">
            <h1 className="text-4xl font-semibold text-red-900">
              LightKonnect&trade;
            </h1>
            <p className="md:text-2xl text-lg font-base text-gray-900">
              LSAI-TX-1612-650400 & LSAI-RX-1612-650400
            </p>

            <p className="text-lg py-8">
              LSAI-TX-1612-650400 Twelve Channel, Pluggable, Parallel Optics
              Transmitter and LSAI-RX-1612-650400 Twelve Channel, Pluggable,
              Parallel Optics Receiver are high performance free-space optics
              modules for short-range parallel multi-lane data communication and
              interconnect applications in a small LGA Surface Mount Package.
            </p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="text-3xl text-red-900 font-semibold ">Features:</div>
        <div>
          <ul className="list-disc pl-10 pt-6 text-lg" >
            <li>16Gbps x 12 channel Transmit and Receive lanes</li>
            <li>
            &#60; 50mW per channel Power consumption ( &#60; 3pJ/bit ) 
            </li>
            <li>I2C Programmable Interface Tx and Rx</li>
            <li>Reflow Solderable
              Surface Mount LGA Package
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LightKonnect;
