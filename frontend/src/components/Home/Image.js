import React from "react";

const Image = ({ cover }) => {
  return (
    <div className="flex-none rounded-lg overflow-hidden shadow-lg">
      <img
        src={`/images/posts/${cover}`}
        alt="article images"
        className="block"
        width="144"
        height="144"
      />
    </div>
  );
};

export default Image;
