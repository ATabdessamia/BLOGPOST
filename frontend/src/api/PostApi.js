import axios from "axios";

const API = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/posts",
});

export const fetchPosts = () => API.get("/");
export const createPost = (newPost) => API.post("/", newPost);
export const fetchPost = (id) => API.patch(`/${id}`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/${id}`);
