import React from "react";
import tyre from "../../assets/images/tyre1.jpg";
import chainRing from "../../assets/images/chainRing.jpg";
import frame from "../../assets/images/fram.jpg";
import seatPost from "../../assets/images/seatPost.webp";
import handlebars from "../../assets/images/handlebars.jpg";
import paddle from "../../assets/images/padddle.jpg";
import Product from "./Product.js";

const Products = () => {
  const products = [
    {
      _id: 1,
      name: "Bicycles Tyre",
      img: tyre,
      description:
        "The Continental Grand Prix 5000S TR arrived as the replacement for the German brand’s previous road tubeless tyre, the GP5000 TL.",
      orderQuantity: "110",
      availableQuantity: "300",
      price: "560",
    },
    {
      _id: 2,
      name: "Chain Ring",
      img: chainRing,
      description:
        "According to Race Face, the Cinch direct mount chainring has been designed to create a tighter interface between the inner and outer links to prevent the chain from jumping. ",
      orderQuantity: "125",
      availableQuantity: "430",
      price: "350",
    },
    {
      _id: 3,
      name: "Frame",
      img: frame,
      description:
        "Steel is the most commonly used material in bike frames. Carbon or high-tensile steel is a good, strong, long-lasting steel, but it isn't as light as its more.",
      orderQuantity: "100",
      availableQuantity: "543",
      price: "760",
    },
    {
      _id: 4,
      name: "Seat Post",
      img: seatPost,
      description:
        "Like handlebars, wheels, and nearly all other bike components, seatposts come in a variety of materials, the most common being aluminium and carbon fibre.",
      orderQuantity: "210",
      availableQuantity: "543",
      price: "430",
    },
    {
      _id: 5,
      name: "Handlebars",
      img: handlebars,
      description:
        "The best road handlebar for you should offer a comfortable transition between the tops, hoods and drops, and a drop shape you are capable of.",
      orderQuantity: "145",
      availableQuantity: "236",
      price: "590",
    },
    {
      _id: 6,
      name: "Paddle",
      img: paddle,
      description:
        "Fiberglass is one of the most popular materials for good reason. These paddles are extremely lightweight and still affordable. They are very durable when it.",
      orderQuantity: "320",
      availableQuantity: "756",
      price: "320",
    },
  ];
  return (
    <div>
      <div className="text-primary text-center text-2xl font-bold mb-20">
        <h2>Our Bicycles Parts Products</h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default Products;
