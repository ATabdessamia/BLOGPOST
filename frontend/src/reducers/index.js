import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import PostReducers from "./PostReducers";
import UserReducers from "./UserReducers";
import CommentReducers from "./CommentReducers";
export default combineReducers({
  auth: AuthReducers,
  posts: PostReducers,
  users: UserReducers,
  comments: CommentReducers,
});
