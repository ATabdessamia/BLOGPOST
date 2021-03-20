import React from "react";

const PostBody = ({ description }) => {
  return (
    <>
      <p className="py-5 px-2 sm:mt-16 text-lg text-gray-700 bg-gray-200 border-gray-100 border-double border-4 text-justify mt-8 leading-loose">
        {description}
      </p>
    </>
  );
};

export default PostBody;
