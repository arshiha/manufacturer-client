import React from "react";

const Product = ({ product }) => {
  return (
    <div class="card w-96 bg-base-100 shadow-xl">
      <figure class="px-10 pt-10">
        <img
          className="object-cover h-48 w-96"
          src={product.img}
          alt="product"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary">{product.name}</h2>
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
        <div class="card-actions">
          <button class="btn btn-primary bg-gradient-to-r from-cyan-500 to-blue-500">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
