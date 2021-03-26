import { combineReducers } from "redux";
import AuthReducers from "./AuthReducers";
import PostReducers from "./PostReducers";
import UserReducers from "./UserReducers";

export default combineReducers({
  auth: AuthReducers,
  posts: PostReducers,
  users: UserReducers,
});
