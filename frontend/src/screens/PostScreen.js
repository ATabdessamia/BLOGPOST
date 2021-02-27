import React from "react";

import Post from "../components/Post/Post";
import PostHeader from "../components/Post/PostHeader";
import PostBody from "../components/Post/PostBody";
import Comments from "../components/Post/Comments";
import CommentForm from "../components/Post/CommentForm";
const PostScreen = () => {
  return (
    <section className="p-5 mt-10">
      <Post>
        <PostHeader />
        <PostBody />
        <Comments />
        <CommentForm />
      </Post>
    </section>
  );
};

export default PostScreen;
