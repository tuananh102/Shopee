export const logIn = (user) => {
  return {
    type: "LOGIN",
    payload: user,
  };
};

export const logOut = (user) => {
  return {
    type: "LOGOUT",
    payload: user,
  };
};
