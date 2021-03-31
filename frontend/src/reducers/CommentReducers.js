/* eslint-disable import/no-anonymous-default-export */
import { COMMENT } from "../constants/index";

export default (posts = { comments: [] }, action) => {
  switch (action.type) {
    case COMMENT:
      return action.payload;
    default:
      return posts;
  }
};
