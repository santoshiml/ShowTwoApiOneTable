import axios from "axios";

import {
  SHOW_POSTS,
  SHOW_POSTS_ERROR,
  SHOW_USERS,
  SHOW_USERS_ERROR,
  SHOW_POST,
  SHOW_POST_ERROR,
  SHOW_USER,
  SHOW_USER_ERROR,
  SHOW_POST_COMMENTS,
  SHOW_COMMENTS_ERROR

} from "../actionType";


export const showposts = (data) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts`)
      .then((responce) => {
        dispatch({
          type: SHOW_POSTS,
          payload: responce.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_POSTS_ERROR,
          payload: error,
        });
      });
  };
};


export const showpost = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((responce) => {
        dispatch({
          type: SHOW_POST,
          payload: responce.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_POST_ERROR,
          payload: error,
        });
      });
  };
};


export const showusers = (data) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((responce) => {
        dispatch({
          type: SHOW_USERS,
          payload: responce.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_USERS_ERROR,
          payload: error,
        });
      });
  };
};


export const showuser = (id) => {
  return (dispatch) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((responce) => {
        dispatch({
          type: SHOW_USER,
          payload: responce.data,
        });
      })
      .catch((error) => {
        dispatch({
          type: SHOW_USER_ERROR,
          payload: error,
        });
      });
  };
};


export const showcomments = () =>{
  return(dispatch) =>{
    axios.get(`https://jsonplaceholder.typicode.com/comments`)
    .then((responce) =>{
      dispatch({
        type:SHOW_POST_COMMENTS,
        payload: responce.data,
      });
    })
    .catch((error) =>{
      dispatch({
        type: SHOW_COMMENTS_ERROR,
        payload: error,
      });
    });
  }
};


