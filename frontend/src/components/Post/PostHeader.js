import React, { useState } from "react";
import moment from "moment";
import "moment/locale/ar-ma";

import Star from "./Star";

const PostHeader = ({ cover, title, createdAt, author }) => {
  moment.locale("ar-ma");
  const fullName = author.firstName + " " + author.lastName;
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const stars = [1, 2, 3, 4, 5];

  return (
    <div className="flex flex-col sm:flex-row items-center">
      <div className="flex-1 w-full h-50 md:h-full bg-gradient-to-r from-green-200 via-blue-400 to-blue-500 transform scale-95 -rotate-6 rounded-lg shadow-2xl">
        <img
          src={`/images/posts/${cover}`}
          alt="article cover"
          className="block w-full shadow-lg h-40 md:h-full transform scale-95 rotate-6 rounded-lg"
        />
      </div>
      <div className="flex-1 flex justify-between mt-12 sm:mt-0 w-full">
        <div className="p-2">
          <h1 className="font-kufi text-3xl text-gray-700 mb-1">{title}</h1>
          <h4 className="text-gray-500 text-lg ">
            نشر {moment(createdAt).fromNow()}
          </h4>
          <h3 className="text-gray-600 font-black text-lg mt-1">
            <span className="ml-2">المؤلف</span>
            <span className="bg-gray-300 rounded-lg px-1">{fullName}</span>
          </h3>
        </div>
        <span className="bg-gray-100 p-1 rounded-full h-8 inline-flex">
          {stars.map((star, i) => {
            return (
              <Star
                key={i}
                starId={i + 1}
                rating={hoverRating || rating}
                onMouseEnter={() => setHoverRating(i + 1)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(i + 1)}
              />
            );
          })}
        </span>
      </div>
    </div>
  );
};

export default PostHeader;
