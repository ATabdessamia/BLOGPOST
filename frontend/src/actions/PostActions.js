import * as api from "../api/PostApi";
import {
  FETCH_POSTS,
  CREATE,
  UPDATE,
  DELETE,
  FETCH_POST,
} from "../constants/index";

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const fetchPosts = (page = "", sort = "-createdAt") => async (
  dispatch
) => {
  try {
    const { data } = await api.fetchPosts(page, sort);

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const fetchPost = (id) => async (dispatch) => {
  try {
    const { data } = await api.fetchPost(id);

    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const fetchPostsBy = (id, page = "") => async (dispatch) => {
  try {
    const { data } = await api.fetchPostsBy(id, page);

    dispatch({ type: FETCH_POSTS, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);

    dispatch({ type: DELETE, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};

export const ratingPost = (id, rating) => async (dispatch) => {
  try {
    const { data } = await api.ratingPost(id, rating);
    dispatch({ type: FETCH_POST, payload: data });
  } catch (error) {
    console.log(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    );
  }
};
