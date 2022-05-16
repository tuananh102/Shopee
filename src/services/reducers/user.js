import { LOGIN, LOGOUT } from "../constant";
const userLocalStorage = localStorage.getItem("user");
let userInitial = {};
if (userLocalStorage !== "undefined")
  userInitial = JSON.parse(userLocalStorage) || {};
const initialState = {
  token: userInitial?.token,
  user: userInitial?.user,
  expiration: userInitial?.expiration,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.warn("From Login", action);
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.expiration = action.payload.expiration;
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state };

    case LOGOUT:
      state = {};
      localStorage.removeItem("user");

      return { ...state };

    default:
      return { ...state };
  }
};
export default userReducer;
