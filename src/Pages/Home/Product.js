import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          className="object-cover h-48 w-96"
          src={product.img}
          alt="product"
          // className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{product.name}</h2>
        <p>{product.description}</p>
        <p>
          <span className="text-primary">
            Minimum Order Quantity: {product.orderQuantity}
          </span>
        </p>
        <p>
          <span className="text-primary">
            Available Quantity: {product.availableQuantity}
          </span>
        </p>
        <p>
          <span className="text-primary">Price: ${product.price}</span>
        </p>
        <div className="card-actions">
          <Link
            to={`/purchase/${product._id}`}
            className="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500"
          >
            Purchase
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
