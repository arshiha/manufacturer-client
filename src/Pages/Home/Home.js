import React from "react";
import Banner from "./Banner.js";
import Client from "./Client/Client.js";
import Experiences from "./Experiences/Experiences.js";
import Footer from "./Footer/Footer.js";
import Products from "./Products.js";
import Reviews from "./Reviews/Reviews.jsx";
import Summary from "./Summary/Summary.js";

const Home = () => {
  return (
    <div className=" px-12">
      <Banner></Banner>
      <Products></Products>
      <Client></Client>
      <Summary></Summary>
      <Reviews></Reviews>
      <Experiences></Experiences>
      <Footer></Footer>
    </div>
  );
};

export default Home;
