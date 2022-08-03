import { type } from "./type";

const userSignIn = (user) => {
  return {
    type: type.AUTH_USER_SIGNUP,
    payload: user,
  };
};

const userLogOut = () => {
  return { type: type.AUTH_USER_LOGOUT };
};

export { userLogOut, userSignIn };
