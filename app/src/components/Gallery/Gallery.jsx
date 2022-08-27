import React from "react";
import { NavLink } from "react-router-dom";
import Info from "./Info";

function Gallery() {
  return (
    <div className="md:px-80 px-2 py-16 ">
      <h1 className="text-4xl font-bold uppercase text-red-900 text-center pb-16">
        Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-2">
        {Info.map((gallery) => (
          <div className="hover:scale-105 duration-300 transition-all hover:bg-gray-100 hover:drop-shadow-xl border-2 p-3 rounded-sm">
            <img
              src={gallery.image}
              alt="Event_image"
              className="md:w-full md:p-0  p-5 mb-4 drop-shadow-lg block m-auto"
            />
            <h6 className="font-semibold p-1 ">{gallery.title}</h6>
            <p className="pb-2">{gallery.description}</p>

            <NavLink
              to={gallery.link}
              className=" bg-red-800 text-white p-1 rounded-lg hover:bg-white hover:text-red-800 hover:border-1 hover:border-red-800"
              name={gallery.title}
            >
              See More &#62;&#62;
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
