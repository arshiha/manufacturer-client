import React from "react";
import notFound from "../../../assets/images/notFound/notFound.jpeg";

const NotFound = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-red-500 text-2xl">
        Page Not Found... Please Try Again
      </h2>
      <img className="w-100" src={notFound} alt="" />
    </div>
  );
};

export default NotFound;
