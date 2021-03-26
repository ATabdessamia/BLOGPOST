import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import TextField from "./TextField";
import File from "./File";
import TextArea from "./TextArea";
import Submit from "./Submit";
import { createPost, updatePost } from "../../actions/PostActions";

const initialState = {
  title: "",
  description: "",
  cover: "",
};
const Form = ({ currentId, setCurrentId }) => {
  const [post, setPost] = useState(initialState);
  const currentPost = useSelector((state) =>
    currentId
      ? state.posts.data.data.find((post) => post._id === currentId)
      : null
  );
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state.auth);
  const currentUser = auth.data.data._id;

  useEffect(() => {
    if (currentPost) setPost(currentPost);
  }, [currentPost]);

  const onChangeValue = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const clear = () => {
    setCurrentId(0);
    setPost(initialState);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", post.title);
    form.append("description", post.description);
    form.append("cover", post.cover);
    form.append("author", currentUser);

    if (currentId === 0) {
      dispatch(createPost(form));
      clear();
    } else {
      dispatch(updatePost(currentId, form));
      clear();
    }
  };
  return (
    <div className="m-5 sm:w-9/12 w-full mx-auto py-5 border-dashed border-gray-400 border rounded">
      <h3 className="text-2xl text-center">
        <span>إنشاء </span>منشور
      </h3>
      <div className="h-2 w-48 bg-gray-700 mx-auto my-4"></div>
      <form
        className="sm:w-8/12 w-full mx-auto p-5"
        onSubmit={(e) => onFormSubmit(e)}
        encType="multipart/form-data"
      >
        <TextField value={post.title} onChange={(e) => onChangeValue(e)} />
        <File
          onChange={(e) =>
            setPost({
              ...post,
              [e.target.name]: e.target.files[0],
            })
          }
          value={post.cover}
        />
        <TextArea value={post.description} onChange={(e) => onChangeValue(e)} />
        <Submit />
      </form>
    </div>
  );
};

export default Form;
