import React from "react";

import Image from "./Image";
import Title from "./Title";
import Body from "./Body";
import Details from "./Details";

const Article = () => {
  return (
    <article className="p-2 flex">
      <Image />
      <Body>
        <Title />
        <Details />
      </Body>
    </article>
  );
};

export default Article;
