import React, { useState, useCallback } from "react";
import CDN from "../Azure/cdn";
import {EventInfo} from "./Gallery"
import {AzadikaAmritMahotsav2022} from "./Info"
import ImageViewer from "react-simple-image-viewer";
function Event() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


console.log("EventInfo is " , EventInfo)
  

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="md:px-60 px-2 py-16 h-max ">
      <h1 className="text-4xl font-bold uppercase text-red-900 text-center pb-16">
        {EventInfo.title}
      </h1>
      <p className="text-xl pb-8">{EventInfo.description}</p>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-2">
        {AzadikaAmritMahotsav2022.map((src, index) => (
          <img
            src={src}
            onClick={() => openImageViewer(index)}
            key={index}
            alt="CDN_IMAGE"
          />
        ))}
      </div>
      {isViewerOpen && (
        <ImageViewer
          src={AzadikaAmritMahotsav2022}
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
