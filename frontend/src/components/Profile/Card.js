import React from "react";
import { Link } from "react-router-dom";

import Star from "./Star";
import CardBody from "./CardBody";
import Edite from "./Edite";

const Card = ({ post, hidden, setCurrentId }) => {
  return (
    <Link
      to={`/${post._id}/${post.slug}`}
      className="rounded-lg shadow-lg bg-gray-100 relative overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out transform hover:scale-105"
    >
      <div className="bg-gray-900">
        <img
          src={`/images/posts/${post.cover}`}
          alt="avatar"
          className="block opacity-40"
        />
      </div>
      <Star rating={post.rating} />
      <Edite hidden={hidden} id={post._id} setCurrentId={setCurrentId} />
      <CardBody
        id={post._id}
        title={post.title}
        createdAt={post.createdAt}
        hidden={hidden}
      />
    </Link>
  );
};

export default Card;
