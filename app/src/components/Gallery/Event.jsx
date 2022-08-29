import React, { useState, useCallback } from "react";
import CDN from "../Azure/cdn";
import Info from "./Info";

import { data } from "./Info";
// import ResponsiveGallery from "react-responsive-gallery";

function Event() {
  return (
    <div className="md:px-80 px-2 py-16 h-max ">
      <h1 className="text-4xl font-bold uppercase text-red-900 text-center pb-16">
        {Info[0].title}
      </h1>
      <p className="text-xl pb-8">{Info[0].description}</p>
      {/* <ResponsiveGallery useLightBox /> */}
      {Info.map((images) => (
        <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
          <img src={images.Image1} alt="test" />
          <img src={images.Image2} alt="test" />
          <img src={images.Image3} alt="test" />
          <img src={images.Image4} alt="test" />
          <img src={images.Image5} alt="test" />
        </div>
      ))}
    </div>
  );
}

export default Event;
