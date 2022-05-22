import React from "react";
import Banner from "./Banner.js";
import Products from "./Products.js";
import Review from "./Review/Review.js";

const Home = () => {
  return (
    <div className=" px-12">
      <Banner></Banner>
      <Products></Products>
      <Review></Review>
    </div>
  );
};

export default Home;
