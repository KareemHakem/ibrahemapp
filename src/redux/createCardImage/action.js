import { type } from "./type";
import { axios } from "../../apis/axios";

export const getCard = () => async (dispatch) => {
  dispatch({ type: type.GET_CARD_IMAGE_REQUEST });
  try {
    const { data } = await axios.get(`/posts`);
    dispatch({ type: type.GET_CARD_IMAGE_SUCCESS, payload: data });
    console.log(data, "data post");
  } catch (err) {
    dispatch({ type: type.GET_CARD_IMAGE_ERROR, payload: err });
  }
};
