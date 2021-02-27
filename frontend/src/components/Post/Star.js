import React from "react";

const Star = ({ starId, rating, onMouseEnter, onMouseLeave, onClick }) => {
  let color = "text-gray-500";
  if (rating && rating >= starId) {
    color = "text-yellow-500";
  }
  console.log(rating);
  return (
    <div
      className={color}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <svg width="16" height="20" fill="currentColor">
        <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
      </svg>
    </div>
  );
};

export default Star;
