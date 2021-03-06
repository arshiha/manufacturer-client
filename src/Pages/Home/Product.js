import React from "react";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const { _id, img, name, description, price, quantity, order } = product;

  const navigate = useNavigate();
  const navigateToItemDetail = (id) => {
    navigate(`/purchase/${id}`);
  };
  return (
    <div class="card lg:max-w-lg bg-base-100  shadow-xl">
      <figure class="px-10 pt-10">
        <img
          style={{ width: "200px" }}
          src={img}
          alt="Shoes"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body ">
        <h2 class="card-title">{name}</h2>
        <p> {description}</p>
        <div>
          <h5>
            <span className="font-semibold">Price: BDT:</span>
            <span className="text-primary font-bold"> {price}/pcs</span>
          </h5>
          <p>
            <span className="font-semibold">Minimum Order Quantity: </span>{" "}
            {order}
          </p>
          <p>
            <span className="font-semibold">Available Quantity:</span>{" "}
            {quantity}
          </p>
        </div>

        <button
          onClick={() => navigateToItemDetail(_id)}
          class="btn btn-block btn-primary"
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Product;
