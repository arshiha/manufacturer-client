import React from "react";
import review1 from "../../../assets/images/reviews/review1.webp";
import review2 from "../../../assets/images/reviews/review2.webp";
import review3 from "../../../assets/images/reviews/review3.jpg";
import Clients from "../Clients/Clients.js";

const Client = () => {
  const clients = [
    {
      _id: 1,
      name: "Herry Smith",
      img: review1,
      description:
        "Tim is the owner and he is incredibly helpful. No pushy sales tactics. Instead he takes the role of a consultant which makes one feel comfortable. He also stands by his product. If anything ever goes wrong he takes the proper steps to do right by the customer. We just moved to Brea and we are thrilled to have a bike store nearby with excellent customer service",
    },
    {
      _id: 2,
      name: "Michael Jen",
      img: review2,
      description:
        "These guys are awesome!  They have a great selection of bikes and related equipment.  The staff is very knowledgeable on bikes from general riding to racing, they have you covered.",
    },
    {
      _id: 3,
      name: "Ann Thomas",
      img: review3,
      description:
        "Just purchased a Cannondale T2 tandem from Tim, he was great and really took his time on getting the bike fit just right for my wife & myself. Have purchased smaller items in the past, and the entire staff has always been super helpful & friendly. Can't wait till we get it on the road for the first time",
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center">
        <h3 className="text-primary text-xl font-bold uppercase mb-12">
          Our Best Client
        </h3>
        {/* <h2 className="text-3xl">Client Says</h2> */}
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 flex justify-center">
        {clients.map((client) => (
          <Clients key={client._id} client={client}></Clients>
        ))}
      </div>
    </div>
  );
};

export default Client;
