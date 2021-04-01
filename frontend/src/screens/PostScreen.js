import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Post from "../components/Post/Post";
import PostHeader from "../components/Post/PostHeader";
import PostBody from "../components/Post/PostBody";
import Comments from "../components/Post/Comments";
import CommentForm from "../components/Post/CommentForm";
import { fetchPost } from "../actions/PostActions";
import { fetchComments } from "../actions/CommentActions";

const PostScreen = ({ match }) => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.posts);
  const { data } = useSelector((state) => state.comments);
  const id = match.params.id;

  useEffect(() => {
    dispatch(fetchPost(id));
    dispatch(fetchComments(id));
  }, [dispatch, id]);

  if (!post) return null;
  if (!data) return <div>فارغ</div>;

  return (
    <section className="p-5 mt-10">
      <Post>
        <PostHeader
          id={id}
          cover={post.data.data.cover}
          title={post.data.data.title}
          createdAt={post.data.data.createdAt}
          author={post.data.data.author}
          rate={post.data.data.rating}
        />
        <PostBody description={post.data.data.description} />
        <Comments comments={data} />
        <CommentForm id={id} />
      </Post>
    </section>
  );
};

export default PostScreen;
