import React from "react";
import { useDispatch } from "react-redux";

import UserComment from "./UserComment";

const Comments = ({ comments }) => {
  const dispatch = useDispatch();

  if (!comments.length > 0) return <div>فارغ</div>;
  return (
    <div className="mt-8">
      <h3 className="inline-flex text-3xl text-gray-700 mb-5">
        <span className="ml-2">
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
        <span>التعليقات</span>
      </h3>
      <ul className="max-h-72 overflow-y-scroll comments  divide-y divide-gray-300">
        {comments &&
          comments.map((comment) => {
            return <UserComment Comment={comment} key={comment._id} />;
          })}
      </ul>
    </div>
  );
};

export default Comments;
