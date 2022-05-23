import React from "react";
import cycle from "../../assets/images/cycle1.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={cycle} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold text-cyan-600">
            {" "}
            Bicycle Manufacturer
          </h1>
          <p className="py-6">
            Once a local activity, creating a bicycle now links factories,
            workers and craftspeople in all corners of the world.Company Themed
            Bicycles for Advertising and Team Building - A quick article showing
            some of the company branded bicycles we've done.It includes at least
            bicycle manufacturers, part or component manufacturers, and
            accessory manufacturers.
          </p>
          <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-cyan-500 to-blue-500">
            Get more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
