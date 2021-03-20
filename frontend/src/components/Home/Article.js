import React from "react";

import Image from "./Image";
import Title from "./Title";
import Body from "./Body";
import Details from "./Details";

const Article = ({ post }) => {
  return (
    <article className="p-2 flex">
      <Image cover={post.cover} />
      <Body>
        <Title title={post.title} slug={post.slug} id={post._id} />
        <Details
          createdAt={post.createdAt}
          author={post.author}
          rating={post.rating}
        />
      </Body>
    </article>
  );
};

export default Article;
