import axios from "axios";

const API = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/posts",
});

export const createComment = (id, newComment) =>
  API.post(`${id}/comments`, newComment);
