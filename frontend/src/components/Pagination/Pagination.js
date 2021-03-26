import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import ArrowButton from "./ArrowButton";
import NumButton from "./NumButton";
import { fetchPosts, fetchPostsBy } from "../../actions/PostActions";

const Pagination = ({ pages, page, path, id }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [active, setActive] = useState("");
  let [activeIndex, setActiveIndex] = useState(1);

  const onActiveClick = (i) => {
    setActiveIndex(i);
    id ? dispatch(fetchPostsBy(id, i)) : dispatch(fetchPosts(i));
    setActive("border-t-4");
  };

  const next = () => {
    activeIndex++;
    activeIndex > pages && (activeIndex = pages);
    setActiveIndex(activeIndex);
    if (id) {
      dispatch(fetchPostsBy(id, activeIndex));
      history.push(`/${path}?page=${activeIndex}&author=${id}`);
    } else {
      dispatch(fetchPosts(activeIndex));
      history.push(`/${path}?page=${activeIndex}`);
    }
  };
  const prev = () => {
    activeIndex--;
    activeIndex < 1 && (activeIndex = 1);
    setActiveIndex(activeIndex);
    if (id) {
      dispatch(fetchPostsBy(id, activeIndex));
      history.push(`/${path}?page=${activeIndex}&author=${id}`);
    } else {
      dispatch(fetchPosts(activeIndex));
      history.push(`/${path}?page=${activeIndex}`);
    }
  };

  const last = () => {
    activeIndex = pages;
    activeIndex > pages && (activeIndex = pages);
    setActiveIndex(activeIndex);
    if (id) {
      dispatch(fetchPostsBy(id, activeIndex));
      history.push(`/${path}?page=${activeIndex}&author=${id}`);
    } else {
      dispatch(fetchPosts(activeIndex));
      history.push(`/${path}?page=${activeIndex}`);
    }
  };

  const first = () => {
    activeIndex = 1;
    activeIndex < 1 && (activeIndex = 1);
    setActiveIndex(activeIndex);
    if (id) {
      dispatch(fetchPostsBy(id, activeIndex));
      history.push(`/${path}?page=${activeIndex}&author=${id}`);
    } else {
      dispatch(fetchPosts(activeIndex));
      history.push(`/${path}?page=${activeIndex}`);
    }
  };

  useEffect(() => {
    onActiveClick(+page);
  }, [page]);

  const points = Math.floor(pages / 2);

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
          {pages > 7
            ? [...Array(pages).keys()].map((p) => {
                return p + 1 === points ? (
                  <span key={p._id}>
                    <NumButton
                      to={
                        id
                          ? `/${path}?page=${p + 1}&author=${id}`
                          : `/${path}?page=${p + 1}`
                      }
                      onClick={() => onActiveClick(p + 1)}
                      active={
                        p + 1 === activeIndex ? active + " points ml-7" : ""
                      }
                      text={points === activeIndex ? activeIndex : "..."}
                    />
                  </span>
                ) : p + 1 === activeIndex ? (
                  <span key={p._id}>
                    <NumButton
                      to={
                        id
                          ? `/${path}?page=${p + 1}&author=${id}`
                          : `/${path}?page=${p + 1}`
                      }
                      onClick={() => onActiveClick(p + 1)}
                      active={p + 1 === activeIndex ? active : ""}
                      text={activeIndex}
                    />
                  </span>
                ) : p + 1 < points && p + 1 <= 3 ? (
                  <span key={p._id}>
                    <NumButton
                      to={
                        id
                          ? `/${path}?page=${p + 1}&author=${id}`
                          : `/${path}?page=${p + 1}`
                      }
                      onClick={() => onActiveClick(p + 1)}
                      active={p + 1 === activeIndex ? active : ""}
                      text={p + 1}
                    />
                  </span>
                ) : (
                  p + 1 > points &&
                  p + 1 >= pages - 2 && (
                    <span key={p._id}>
                      <NumButton
                        to={
                          id
                            ? `/${path}?page=${p + 1}&author=${id}`
                            : `/${path}?page=${p + 1}`
                        }
                        onClick={() => onActiveClick(p + 1)}
                        active={p + 1 === activeIndex ? active : ""}
                        text={p + 1}
                      />
                    </span>
                  )
                );
              })
            : [...Array(pages).keys()].map((p) => {
                return (
                  <span key={p + 1}>
                    <NumButton
                      to={
                        id
                          ? `/${path}?page=${p + 1}&author=${id}`
                          : `/${path}?page=${p + 1}`
                      }
                      onClick={() => onActiveClick(p + 1)}
                      active={p + 1 === activeIndex ? active : ""}
                      text={p + 1}
                    />
                  </span>
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
