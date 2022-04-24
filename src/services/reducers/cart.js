import { ADD_TO_CART, REMOVE_TO_CART } from "../constant";
const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  cartTotalAmount: 0,
  cartTotalQuantity: 0,
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let sameIndex = -1;
      if (state.cartItems) {
        sameIndex = state.cartItems.findIndex(
          (item) => item.id === action.data.id
        );
        if (sameIndex >= 0) {
          state.cartItems[sameIndex].cartQuantity += 1;
          return { ...state };
        } else {
          const tempProduct = { ...action.data, cartQuantity: 1 };
          state.cartItems.push(tempProduct);
          return { ...state };
        }
      } else {
        state.cartItems.push(action.data);
        return { ...state };
      }
    case REMOVE_TO_CART:
      const itemRemove = state.cartItems.indexOf(action.data.id);
      return state.cartItems.splice(itemRemove, 1);
    default:
      return state;
  }
};
export default cartReducer;
