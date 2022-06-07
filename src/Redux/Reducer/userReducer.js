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
  
} from "../actionType";

const initialState = {
  postsData: [],
  postsError: [],
  usersData: [],
  usersError: [],
  postComment:[],
  postCommentError:[]
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_POSTS:
      return {
        ...state,
        postsData: action.payload,
        postsError: action.error
      };
      break;

    case SHOW_POSTS_ERROR:
      return {
        ...state,
        postsError: action.payload
      };
      break;

    case SHOW_POST:
      return {
        ...state,
        postsData: action.payload,
        postError: action.error
      };
      break;

    case SHOW_USERS:
      return {
        ...state,
        usersData: action.payload,
        usersError: action.error
      };
      break;

    case SHOW_USER:
      return {
        ...state,
        usersData: action.payload,
        usersError: action.error
      };
      case SHOW_POST_COMMENTS:
        return{
          ...state,
          postComment:action.payload,
          postCommentError:action.error
        };
        break;

    default:
      return state;
  }
};

export default userReducer;
