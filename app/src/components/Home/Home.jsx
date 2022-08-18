import React from "react";
import NavBar from "../NavBar/NavBar";
import LightSpeedAI_Logo from "../../assets/images/LightSpeedAI-Labs-v5-dark-01.png";
import BG from "../../assets/images/bg.jpg";

import Laser_1 from "../../assets/images/laser_1.jpg";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Spring, useSpring, animated } from "react-spring";
import Footer from "../Footer/Footer";


function Home() {
  
  return (
    <div className="home ">
      {/* <Parallax pages={3} scrolling  > */}
      <ParallaxLayer
        offset={0}
        speed={2}
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
        }}
      >
        <ParallaxLayer
          offset={0}
          speed={0.5}
          className="mx-auto w-full h-full flex justify-center pt-40   "
        >
          {/* <Spring config={{ duration: 2000 }} > */}
          <div className="flex flex-col bg-blend-multiply text-center text-slate-100 px-20   ">
            <h1 className=" md:text-6xl text-3xl font-Roboto-Bold font-bold ">
              Bringing{" "}
              <span className="bg-gradient-to-r bg-clip-text  text-transparent from-red-500 via-green-500 to-violet-500  subpixel-antialiased underline hover:decoration-slate-100  ">
                Light
              </span>{" "}
              to Compute World!
            </h1>
            <br />
            <br />

            <p className="md:text-3xl text-2xl font-Roboto-Bold">
              Building Lego-Like Optoelectronic Processors and Interconnects for
              DataCenters and near-Edge Compute
            </p>
          </div>
          <div class="shadow-md ...">HI</div>
        </ParallaxLayer>
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2} style={{ backgroundColor: "#000" }} />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <p>Scroll up</p>
      </ParallaxLayer>
      {/* <ParallaxLayer offset={2} speed={2}>
          <Footer />
        </ParallaxLayer> */}
      {/* </Parallax> */}
    </div>
  );
}

export default Home;
