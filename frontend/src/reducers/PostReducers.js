/* eslint-disable import/no-anonymous-default-export */
import {
  FETCH_POSTS,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_POST,
} from "../constants/index";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload;
    case FETCH_POST:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
