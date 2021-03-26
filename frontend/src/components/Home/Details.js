import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";
import "moment/locale/ar-ma";

import Star from "./Star";
import { getuser } from "../../actions/UserActions";

const Details = ({ createdAt, rating, author }) => {
  const dispatch = useDispatch();
  moment.locale("ar-ma");
  const fullName = author.firstName + " " + author.lastName;

  const getUserHandler = (id) => {
    dispatch(getuser(id));
  };
  return (
    <div className="text-sm font-medium mt-1">
      <div>
        <span className="sr-only">الوقت</span>
        <div>
          <h2 className="text-gray-400">نشر {moment(createdAt).fromNow()}</h2>
        </div>
      </div>
      <div className="mt-1">
        <span className="inline text-gray-900">
          المؤلف
          <Link
            to={`/profile?page=1&author=${author._id}`}
            href="#/"
            className="cursor-pointer text-gray-500 hover:text-gray-900"
            onClick={() => {
              getUserHandler(author._id);
            }}
          >
            {" "}
            {fullName}{" "}
          </Link>
        </span>
      </div>
      <Star rating={rating} />
    </div>
  );
};

export default Details;
