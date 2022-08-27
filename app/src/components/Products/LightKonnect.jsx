import React from "react";
import { motion } from "framer-motion";
import Download from "./Download";

import CDN from "../Azure/cdn";

// Need to add all images to Azure CDN
const LKImage = `${CDN}/Products/LSAI-A0001-02-01.1.png`;

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
              className=" hover:drop-shadow-xl"
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
            <Download />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 md:gap-0 gap-4 py-10">
        <div className=" md:px-8 px-8">
          <div className="text-3xl text-red-900 font-semibold ">Features:</div>
          <div>
            <ul className="list-disc pl-10 pt-6 text-lg">
              <li>Free-space optical interconnect</li>
              <li>Protocol agnostic chip-to-chip communication</li>
              <li>Single 3.3 V Supply</li>
              <li>Links up to distances of 150 mm between modules</li>
              <li>16Gbps x 12 channel Transmit and Receive lanes</li>
              <li>200Gbps/mm (Parallel) – NRZ</li>
              <li>
                &#60; 50mW per channel Power consumption ( &#60; 3pJ/bit )
              </li>
              <li>I2C Programmable Interface Tx and Rx</li>
            </ul>
          </div>
        </div>

        <div className="md:px-8 px-8">
          <div className="text-3xl text-red-900 font-semibold ">
            Applications:
          </div>
          <div>
            <ul className="list-disc pl-10 pt-6 text-lg">
              <li>200/400/800 GbE interconnects with FDR and EDR channels.</li>
              <li>
                Data Aggregation, Proprietary Protocol and Density Applications.
              </li>
              <li>
                High Performance and High Productivity computer interconnects.
              </li>
              <li>Switch Fabric interconnects.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LightKonnect;
