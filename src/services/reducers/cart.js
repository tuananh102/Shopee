const initialState = {
  cardData: [],
};
const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, { cardData: action.data }];
    default:
      return state;
  }
};
export default cartReducer;
