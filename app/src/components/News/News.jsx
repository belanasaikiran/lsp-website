import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../Footer/Footer";
import Laser_1 from "../../assets/images/laser_1.jpg";

function News() {
  return (
    <div className="home">
      <ParallaxLayer offset={0} speed={0.25} className="bg-slate-500 bg-cover text-black" />

        <ParallaxLayer offset={0} speed={1} className="mx-auto w-full flex justify-center pt-40 scroll-pr-px" >
          <h1 className="text-3xl font-bold text-white-500">
            News
          </h1>
        </ParallaxLayer>

    </div>
  );
}

export default News;
