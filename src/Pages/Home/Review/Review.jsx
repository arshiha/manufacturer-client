import React from "react";

const Review = ({ userReview }) => {
  const { review, user, email, photo } = userReview;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          style={{ width: "130px", height: "130px", borderRadius: "50%" }}
          src={photo}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center ">
        <h1 className="card-title">{user}</h1>
        <h5 className="text-1xl font-semibold">{email}</h5>
        <p>{review.slice(0, 100)}</p>
        <div class="rating rating-lg">
          <input
            type="radio"
            name="rating-8"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            class="mask mask-star-2 bg-orange-400"
            checked
          />
          <input
            type="radio"
            name="rating-8"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            class="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-8"
            class="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Review;

// assainment 12 private to public
