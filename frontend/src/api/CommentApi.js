import axios from "axios";

const API = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:5000/comments",
});

export const createComment = (id, newComment) =>
  API.post(`${id}/post`, newComment);
export const fetchComments = (id) => API.get(`${id}/post`);
