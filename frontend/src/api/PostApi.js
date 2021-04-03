import axios from "axios";

const API = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/",
});

export const fetchPosts = (page, sort) =>
  API.get(`/posts?page=${page}&sort=${sort}`);
export const fetchPostsBy = (id, page) =>
  API.get(`/posts/profile/${id}?page=${page}`);
export const createPost = (newPost) => API.post("/posts", newPost);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const ratingPost = (id, rating) =>
  API.patch(`/posts/${id}/rating`, rating);
