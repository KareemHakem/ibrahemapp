import { type } from "./type";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const getPostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_CARD_IMAGE_REQUEST:
      return {
        loading: true,
      };

    case type.GET_CARD_IMAGE_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: null,
      };

    case type.GET_CARD_IMAGE_ERROR:
      return {
        data: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getPostsReducer;
