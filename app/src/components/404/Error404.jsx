import React from "react";
import ErrorImage from "../../assets/images/404.svg";

export default function Error() {
  return (
    <div className="text-center flex flex-col items-center pt-10  ">
      <img src={ErrorImage} alt="404" className=" h-3/6 mb-10  " />

      <h1 className="pb-10 -red-900 text-6xl">Oops! Page not found</h1>
    </div>
  );
}
