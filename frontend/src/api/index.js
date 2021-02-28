import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const fetchPosts = () => API.get("/posts");
export const createPost = (newPost) => API.post("/posts", newPost);
export const fetchPost = (id) => API.get(`/posts/${id}`);
export const updatePost = (id, updatedPost) =>
  API.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);

export const signIn = (formData) => API.post("/user/signin", formData);
export const signUp = (formData) => API.post("/user/signup", formData);
export const logOut = () => API.get("/user/logout");

export const fetchUser = (id) => API.get(`/user/${id}`);
export const forgotPassword = () => API.post(`/user/forgotPassword`);
export const updatePassword = () => API.patch(`/user/updatePassword`);
export const updateMe = () => API.patch(`/user/updateMe`);
export const fetchMe = () => API.get(`/user/me`);
