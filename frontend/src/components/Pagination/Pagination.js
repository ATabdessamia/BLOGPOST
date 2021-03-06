import React, { useState, useEffect } from "react";

import ArrowButton from "./ArrowButton";
import NumButton from "./NumButton";

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

  const last = () => {
    activeIndex = btnList.length - 1;
    setActiveIndex(activeIndex);
    activeIndex > btnList.length - 1 && setActiveIndex(btnList.length - 1);
  };

  const first = () => {
    setActiveIndex(0);
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
        <ArrowButton onClick={last}>
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </ArrowButton>
        <ArrowButton onClick={next}>
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          ></path>
        </ArrowButton>
        <div className="flex flex-row-reverse items-center text-lg font-black">
          {btnList.map((b, i) => {
            return i === points ? (
              <NumButton
                onClick={() => onActiveClick(i)}
                active={i === activeIndex ? active + " points ml-7" : ""}
                key={i}
                text={points === activeIndex ? activeIndex + 1 : "..."}
              />
            ) : i === activeIndex ? (
              <NumButton
                onClick={() => onActiveClick(i)}
                active={i === activeIndex ? active : ""}
                key={i}
                text={activeIndex + 1}
              />
            ) : i < points && i <= 2 ? (
              <NumButton
                onClick={() => onActiveClick(i)}
                active={i === activeIndex ? active : ""}
                key={i}
                text={i + 1}
              />
            ) : (
              i > points &&
              i >= btnList.length - 3 && (
                <NumButton
                  onClick={() => onActiveClick(i)}
                  active={i === activeIndex ? active : ""}
                  key={i}
                  text={i + 1}
                />
              )
            );
          })}
        </div>
        <ArrowButton onClick={prev}>
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          ></path>
        </ArrowButton>
        <ArrowButton onClick={first}>
          <path
            fillRule="evenodd"
            d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          ></path>
        </ArrowButton>
      </div>
    </section>
  );
};

export default Pagination;
