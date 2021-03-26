import React from "react";

const Empty = () => {
  return (
    <div className="sm:flex justify-around items-center mt-5">
      <div>
        <img
          src="/images/undraw_Online_article_re_daq5.svg"
          alt="لا يوجد منشور حتى الان"
          width="400px"
          height="400px"
        />
      </div>
      <h1 className="text-3xl text-center sm:text-7xl text-gray-900 opacity-70">
        لا يوجد منشور حتى الان
      </h1>
    </div>
  );
};

export default Empty;
