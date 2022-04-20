const initialState = {
  list: [],
  activeId: 0,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };

    case "LOGOUT":
      return state;

    default:
      return state;
  }
};
export default userReducer;
