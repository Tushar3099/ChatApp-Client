const defaultToken = null;

const TokenReducer = (state = defaultToken, action) => {
  switch (action.type) {
    case "SET_TOKEN":
      return action.payload;
    case "DELETE_TOKEN":
      return null;
    default:
      return state;
  }
};

export default TokenReducer;
