import React from "react";
import bg_1 from "../../assets/Gallery/AzadiKaAmritMahotsav/1.jpeg"
// import Info from "./Info"

function Gallery() {
  return (
    <div className="md:px-80 px-2 py-16 ">
      <h1 className="text-4xl font-bold uppercase text-red-900 text-center pb-16">
        {" "}
        Gallery
      </h1>

      <div className="grid md:grid-cols-3 gap-2">
        <div className="hover:scale-105 duration-300 transition-all hover:bg-gray-100 hover:drop-shadow-xl border-2 p-3 rounded-sm">
          <img
            src={bg_1}
            alt="Event_image"
            className="md:w-full md:p-0  p-5 mb-4 drop-shadow-lg block m-auto"
          />
          <h6 className="font-semibold p-1 ">Azadi Ka Digital Mahotsav</h6>
          <p className="pb-2">The Ministry of Electronics and Information Technology (MeitY) recently held a week-long celebration, ‘Azadi Ka Digital Mahotsav’, to mark the 75th year of independence. The program showcased how digital technology has triggered innovation and India’s achievements in the digital space. It also highlighted how Digital technologies are transforming all sectors of the economy and impacting our socio-cultural, political and economic identity and fuel the spirit of self-reliance in the Digital sector.</p>

          <a
            href="#_"
            target="_blank"
            rel="noreferrer"
            className=" bg-red-800 text-white p-1 rounded-lg hover:bg-white hover:text-red-800 hover:border-1 hover:border-red-800"
          >
            See More &#62;&#62;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
