const defaultUser = {
  image:
    "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80",
};

const UserReducer = (state = defaultUser, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, ...action.payload };
    case "SET_USERNAME":
      return { ...state, username: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONENUMBER":
      return { ...state, phoneNumber: action.payload };
    case "SET_BIO":
      return { ...state, bio: action.payload };
    case "SET_IMAGE":
      return { ...state, image: action.payload };
    case "DELETE_USER":
      return null;
    default:
      return state;
  }
};

export default UserReducer;
