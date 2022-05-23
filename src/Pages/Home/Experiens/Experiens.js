import React from "react";

const Experiens = ({ experiens }) => {
  return (
    <div className="card lg:max-w-lg shadow-xl mt-16">
      <figure className="px-10 pt-10 h-40">
        <img
          className="object-cover h-48 w-96"
          src={experiens.img}
          alt="Cycle"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-primary">{experiens.name}</h2>
        <p>{experiens.description}</p>
      </div>
    </div>
  );
};

export default Experiens;
