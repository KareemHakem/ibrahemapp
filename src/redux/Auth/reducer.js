import { type } from "./type";

const initialState = {
  isAuthenticated: false,
  currentUser: null,
  loading: false,
  error: null,
};

const authUserReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.AUTH_USER_SIGNUP_LOADING:
      return { ...state, loading: true };

    case type.AUTH_USER_SIGNUP_SUCCESS:
      return {
        loading: false,
        currentUser: action.payload,
        isAuthenticated: true,
        error: null,
      };

    case type.AUTH_USER_SIGNUP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case type.AUTH_USER_LOGOUT:
      return {
        currentUser: null,
        isAuthenticated: false,
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};

export default authUserReducer;
