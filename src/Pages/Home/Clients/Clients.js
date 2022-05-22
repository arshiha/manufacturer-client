import React from "react";

const Clients = ({ client }) => {
  const { name, img, description } = client;

  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{name}</h2>

        <p className="text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default Clients;
