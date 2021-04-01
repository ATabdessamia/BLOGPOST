/* eslint-disable import/no-anonymous-default-export */
import { COMMENT, COMMENTS } from "../constants/index";

export default (comments = {}, action) => {
  switch (action.type) {
    case COMMENTS:
      return action.payload;
    case COMMENT:
      return { ...comments, comment: action.payload };
    default:
      return comments;
  }
};
