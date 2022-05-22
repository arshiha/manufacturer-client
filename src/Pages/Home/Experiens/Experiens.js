import React from "react";

const Experiens = ({ experiens }) => {
  return (
    <div class="card lg:max-w-lg shadow-xl mt-16 ">
      <figure class="px-10 pt-10 h-40">
        <img
          className="object-cover h-48 w-96"
          src={experiens.img}
          alt="Cycle"
          class="rounded-xl"
        />
      </figure>
      <div class="card-body items-center text-center">
        <h2 class="card-title text-primary">{experiens.name}</h2>
        <p>{experiens.description}</p>
      </div>
    </div>
  );
};

export default Experiens;
