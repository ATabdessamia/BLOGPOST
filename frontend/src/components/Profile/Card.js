import React from "react";

import Star from "./Star";
import CardBody from "./CardBody";
import Edite from "./Edite";
const Card = () => {
  return (
    <article className="rounded-lg shadow-lg bg-gray-100 relative overflow-hidden">
      <div className="bg-gray-900">
        <img src="images/Foggy.jpg" alt="avatar" className="block opacity-40" />
      </div>
      <Star />
      <Edite />
      <CardBody />
    </article>
  );
};

export default Card;
