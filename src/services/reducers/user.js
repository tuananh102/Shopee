import { LOGIN, LOGOUT } from "../constant";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      console.warn("From Login", action);
      state = action.payload;
      return state;

    case LOGOUT:
      state = {};
      return state;

    default:
      return state;
  }
};
export default userReducer;
