import React from "react";

import Article from "../components/Home/Article";
import Articles from "../components/Home/Articles";
import Navs from "../components/Home/Navs";
import Pagination from "../components/Pagination";
const HomeScreen = () => {
  return (
    <>
      <section className="py-8 container mx-auto w-full md:w-3/4 divide-y divide-gray-300">
        <Navs />
        <Articles>
          <Article />
        </Articles>
      </section>
      <Pagination />
    </>
  );
};

export default HomeScreen;
