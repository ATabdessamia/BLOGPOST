import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchPosts } from "../../actions/PostActions";

const Navs = () => {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();

  const divOActive = active ? "bg-gray-300 text-gray-700" : "";
  const divTActive = active ? "" : "bg-gray-300 text-gray-700";
  return (
    <nav className="p-4">
      <ul className="flex">
        <li>
          <div
            onClick={() => {
              dispatch(fetchPosts("", "-rating"));
              setActive(!active);
            }}
            className={`block px-4 py-2 text-lg rounded-md hover:bg-gray-200 ml-4 ${divOActive}`}
          >
            المميزة
          </div>
        </li>
        <li>
          <div
            onClick={() => {
              dispatch(fetchPosts());
              setActive(!active);
            }}
            className={`block px-4 py-2 text-lg rounded-md hover:bg-gray-200 ${divTActive}`}
          >
            الاخيرة
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Navs;
