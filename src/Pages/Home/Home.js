import React from "react";
import Banner from "./Banner.js";
import Client from "./Client/Client.js";
import Experiences from "./Experiences/Experiences.js";
import Products from "./Products.js";

const Home = () => {
  return (
    <div className=" px-12">
      <Banner></Banner>
      <Products></Products>
      <Client></Client>
      <Experiences></Experiences>
    </div>
  );
};

export default Home;
