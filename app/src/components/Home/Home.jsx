import React from "react";
import BG from "../../assets/images/bg.jpg";
import OLD_BG from "../../assets/images/old_website.jpg";
import SIP from "../../assets/images/2legoSIP.2.JPG";



function Home() {
  return (
    <div>
      <div className="grid md:grid-flow-col gap-4 md:px-60 px-2 py-12 bg-cover bg-gray-50  "
      
        // add background image
      
      >
        <div className="md:flex flex-col text-black items-center pt-1 md:pt-8">
          <h1 className="md:text-5xl text-3xl  text-semibold font-bold md:text-left md:leading-[4rem] ">
            Bringing <span className="text-amber-700">Light</span> to the Compute World !
          </h1>
          <p className="md:text-2xl pt-8">
            Building Lego-Like Optoelectronic Processors and Interconnects for
            DataCenters and near-Edge Compute
          </p>
        </div>
        <div>
          <img src={SIP} alt="laser" className="shadow-2xl" />
        </div>
      </div>


      {/* Section -2 */}
      <div>
      <div className="md:px-60 px-2 py-12  bg-red-500 ">
      <div className=" text-white  items-center pt-1 md:pt-8">
        <h1 className="md:text-5xl text-3xl  text-semibold font-bold text-center md:leading-[4rem] ">
        At LightSpeed Photonics,
        </h1>
        <p className="md:text-2xl pt-16 text-justify px-5 ">
        We combine optical interconnects with Processors to build a modular <span className="text-rose-800 font-medium" >compute+interconnect</span> heterogeneous System-in-Package (SiP), <span className="text-red-500 font-medium" >LightSiP™</span> resulting in a scalable server reducing data latency, footprint, power consumption while increasing the data bandwidth and performance per watt.  It incorporates proprietary high data rate free-space optical interconnect, <span className="text-red-500 font-medium" >LightKonnect™</span> for protocol agnostic chip-to-chip communication.
        </p>
        <p className="md:text-2xl pt-8 text-justify px-5 ">
        Reconfigurable electronics provides the computing power and optics provides the interconnect and together, the LightSiP provides upto 20x performance at half the power.</p>
      </div>
      <div>
      </div>
    </div>
      </div>
    </div>
  );
}

export default Home;
