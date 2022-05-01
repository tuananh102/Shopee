import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";

export const addToCart = (data) => {
  return {
    type: ADD_TO_CART,
    data: data,
  };
};

export const removeToCart = (data) => {
  console.warn("Remove item", data.id);
  return {
    type: REMOVE_TO_CART,
    data: data,
  };
};
