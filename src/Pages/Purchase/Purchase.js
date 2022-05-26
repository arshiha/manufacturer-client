import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { productId } = useParams();
  const [product, setProducts] = useState({});

  useEffect(() => {
    const url = `https://frozen-waters-73910.herokuapp.com/product/${productId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center mt-12">
      <div>
        <div class="card lg:max-w-lg mx-auto bg-base-100  shadow-xl">
          <figure class="px-10 pt-10">
            <img
              style={{ width: "200px" }}
              src={product.img}
              alt="Shoes"
              class="rounded-xl"
            />
          </figure>
          <div class="card-body ">
            <h2 class="card-title">{product.name}</h2>
            <p> {product.description}</p>
            <div>
              <h5>
                <span className="font-semibold">Price: BDT:</span>
                <span className="text-primary font-bold">
                  {product.price}/pcs
                </span>
              </h5>
              <p>
                <span className="font-semibold">Minimum Order Quantity: </span>{" "}
                {product.order}
              </p>
              <p>
                <span className="font-semibold">Available Quantity:</span>{" "}
                {product.quantity}
              </p>
            </div>

            <button class="btn btn-block btn-primary">Purchase</button>
          </div>
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Product Name"
          class="input input-bordered input-xs w-full max-w-xs my-5 input-primary"
        />

        <input
          type="text"
          placeholder="Min Order"
          class="input input-bordered input-sm w-full max-w-xs my-5 input-primary"
        />
        <div className=" mx-5">
          <input
            type="text"
            placeholder="purchase"
            class="input input-bordered w-20 max-h-8 max-w-xs my-5 input-primary"
          />
          <input
            type="text"
            placeholder="AQ"
            class="input input-bordered w-20 max-h-8 max-w-xs my-5 input-primary mx-5"
          />
          <input
            type="text"
            placeholder="price"
            class="input input-bordered w-20 max-h-8 max-w-xs my-5 input-primary"
          />
        </div>

        <input
          type="text"
          placeholder="Phone Number"
          class="input input-bordered input-xs w-full max-w-xs my-5 input-primary"
        />

        <input
          type="text"
          placeholder="Shiping Address"
          class="input input-bordered input-md w-full max-w-xs my-5 input-primary"
        />

        <input
          type="text"
          placeholder="Description"
          class="input input-bordered input-lg w-full max-w-xs my-5 input-primary"
        />
        <button class="btn btn-primary input-lg w-full max-w-xs my-5 input-primary max-h-8">
          Purchase Now
        </button>
      </div>
    </div>
  );
};

export default Purchase;
