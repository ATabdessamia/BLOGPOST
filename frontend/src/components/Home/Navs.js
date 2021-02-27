import React from "react";

const Navs = () => {
  return (
    <nav className="p-4">
      <ul className="flex">
        <li>
          <a
            href="#/"
            className="block px-4 py-2 text-lg rounded-md bg-gray-300 text-gray-700 hover:bg-gray-200 ml-4"
          >
            المميزة
          </a>
        </li>
        <li>
          <a
            href="#/"
            className="block px-4 py-2 text-lg rounded-md hover:bg-gray-200"
          >
            الاخيرة
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navs;
