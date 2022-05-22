import React from "react";
import icon1 from "../../../assets/images/icon/icon1.png";
import icon2 from "../../../assets/images/icon/icon2.jpg";
import icon3 from "../../../assets/images/icon/icon3.png";
import Experiens from "../Experiens/Experiens.js";

const Experiences = () => {
  const experiences = [
    {
      _id: 1,
      name: "Experienced",
      description:
        "The employee experience below at Trek Bicycle, compared to a typical company. Learn More. ",
      img: icon1,
    },
    {
      _id: 2,
      name: "Trust",
      description:
        "The co-founders imbibe the Eastern philosophy of simple living and high thinking.",
      img: icon2,
    },
    {
      _id: 3,
      name: "Services",
      description:
        "Products and Services ... Cycle Works is a full-service specialized bicycle shop.",
      img: icon3,
    },
  ];
  return (
    <div>
      <div className="text-center">
        <h2 className="text-primary font-bold text-2xl uppercase">
          Our Experiences
        </h2>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {experiences.map((experiens) => (
          <Experiens key={experiens._id} experiens={experiens}></Experiens>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
