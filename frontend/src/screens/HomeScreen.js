import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Article from "../components/Home/Article";
import Articles from "../components/Home/Articles";
import Navs from "../components/Home/Navs";
import Pagination from "../components/Pagination/Pagination";
import { fetchPosts } from "../actions/PostActions";

const HomeScreen = ({ match }) => {
  const dispatch = useDispatch();
  const { data, pages } = useSelector((state) => state.posts);
  const page = match.params.pageNumber;

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [dispatch, page]);

  if (!data || !pages) return null;

  return (
    <>
      <section className="py-8 container mx-auto w-full md:w-3/4 divide-y divide-gray-300">
        <Navs />
        <Articles>
          {data &&
            data.data.map((post) => {
              return <Article post={post} key={post._id} />;
            })}
        </Articles>
      </section>
      <Pagination pages={pages} />
    </>
  );
};

export default HomeScreen;
