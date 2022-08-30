import React, { useState, useCallback } from "react";
import Info from "./Info";
import ImageViewer from "react-simple-image-viewer";



function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);


  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <div className="xl:px-80 px-2 py-16 ">
      <h1 className="text-4xl font-bold uppercase text-red-900 text-center pb-16">
        Gallery
      </h1>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
        {Info.map((src, index) => (
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
          src={Info}
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

export default Gallery;
