import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ar-ma";

const UserComment = ({ Comment }) => {
  moment.locale("ar-ma");
  const { comment, user, createdAt } = Comment;
  const fullName = user.firstName + " " + user.lastName;
  return (
    <div className="flex items-start py-4 hover:bg-gray-100">
      <Link to={`/profile?page=1&author=${user._id}`}>
        <img
          src={`/images/users/${user.photo}`}
          alt="avatar"
          className="w-12 h-12 rounded-2xl"
        />
      </Link>
      <div className="px-5">
        <div className="inline-flex items-center mb-2 -mr-2">
          <Link
            to={`/profile?page=1&author=${user._id}`}
            className="text-gray-700 font-black text-lg font-kufi ml-2"
          >
            {fullName}
          </Link>
          <span className="text-gray-500 text-sm">
            علق {moment(createdAt).fromNow()}
          </span>
        </div>
        <div className="text-base text-gray-700">
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default UserComment;
