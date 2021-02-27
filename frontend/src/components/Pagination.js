import React, { useState, useEffect } from "react";

const Pagination = () => {
  const [active, setActive] = useState("");
  let [activeIndex, setActiveIndex] = useState(0);

  const onActiveClick = (i) => {
    setActiveIndex(i);
    setActive("border-t-4");
  };

  const next = () => {
    activeIndex++;
    setActiveIndex(activeIndex);
    activeIndex > btnList.length - 1 && setActiveIndex(btnList.length - 1);
  };

  const prev = () => {
    activeIndex--;
    setActiveIndex(activeIndex);
    activeIndex < 1 && setActiveIndex(0);
  };

  useEffect(() => {
    onActiveClick(0);
  }, []);
  const btnList = [
    "a",
    "b",
    "c",
    "c",
    "c",
    "b",
    "b",
    "c",
    "c",
    "c",
    "b",
    "b",
    "c",
  ];
  const points = Math.floor(btnList.length / 2);

  return (
    <section className="py-5 text-gray-700 container mx-auto w-full md:w-1/2 max-w-min min-w-max">
      <div className="flex justify-center items-center">
        <button
          className="hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95"
          onClick={next}
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="flex flex-row-reverse items-center text-lg font-black">
          {btnList.map((b, i) => {
            console.log(activeIndex, i);
            return i === points ? (
              <button
                className={`hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95 px-2 border-gray-900 ${
                  i === activeIndex ? active + " points ml-3" : ""
                }`}
                key={i}
              >
                {points === activeIndex ? activeIndex + 1 : "..."}
              </button>
            ) : i === activeIndex ? (
              <button
                className={`hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95 px-2 border-gray-900 ${
                  i === activeIndex ? active : ""
                }`}
                key={i}
              >
                {activeIndex + 1}
              </button>
            ) : i < points && i <= 2 ? (
              <button
                onClick={() => onActiveClick(i)}
                className={`hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95 px-2 border-gray-900 ${
                  i === activeIndex ? active : ""
                }`}
                key={i}
              >
                {i + 1}
              </button>
            ) : (
              i > points &&
              i >= btnList.length - 3 && (
                <button
                  onClick={() => onActiveClick(i)}
                  className={`hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95 px-2 border-gray-900 ${
                    i === activeIndex ? active : ""
                  }`}
                  key={i}
                >
                  {i + 1}
                </button>
              )
            );
          })}
        </div>
        <button
          className="hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50 transition-transform duration-300 ease-in-out transform hover:scale-95"
          onClick={prev}
        >
          <svg
            className="w-8 h-8"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Pagination;
