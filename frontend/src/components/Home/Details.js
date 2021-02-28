import React from "react";

import Star from "./Star";

const Details = () => {
  return (
    <div className="text-sm font-medium mt-1">
      <div>
        <span className="sr-only">الوقت</span>
        <div>
          <h2 className="text-gray-400">نشر قبل 10 دقائق</h2>
        </div>
      </div>
      <div className="mt-1">
        <span className="inline text-gray-900">
          المؤلف
          <a
            href="#/"
            className="cursor-pointer text-gray-500 hover:text-gray-900"
          >
            {" "}
            اسم المؤلف{" "}
          </a>
        </span>
      </div>
      <Star />
    </div>
  );
};

export default Details;
