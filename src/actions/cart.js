export const addCart = (product) => {
  return {
    type: "ADD_CART",
    payload: product,
  };
};

export const deleteCart = (product) => {
  return {
    type: "DELETE_CART",
    payload: product,
  };
};
