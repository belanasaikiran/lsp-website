import React, { useState, useCallback } from "react";
import CDN from "../Azure/cdn";

import { EventInfo, Photos } from "./Gallery";
import ImageViewer from "react-simple-image-viewer";

// dynamic import

function Event() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  // console.log("EventInfo is " , EventInfo)
  // console.log("Photos: ", Photos)

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="xl:px-60 px-2 py-16 h-max ">
      <h1 className="text-4xl font-bold uppercase text-red-900 text-center pb-16">
        {EventInfo.title}
      </h1>
      <p className="text-xl pb-8">{EventInfo.description}</p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {Photos.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            key={index}
            alt="CDN_IMAGE"
            style={{
              width: "500px",
              height: "400px",
              objectFit: "cover",
            }}
          />
        ))}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={Photos}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.8)",
            padding: "20px",
          }}
          closeOnClickOutside={true}
        />
      )}
    </div>
  );
}

export default Event;
