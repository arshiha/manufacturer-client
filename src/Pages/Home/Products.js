import React from "react";
import useProduct from "../../Hooks/UseProduct.js";
import Product from "./Product.js";

const Products = () => {
  const [products, setProducts] = useProduct();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
};

export default Products;
