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
      return { post: action.payload };

    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return [...posts, action.payload];
    case DELETE:
      return action.payload;
    default:
      return posts;
  }
};
