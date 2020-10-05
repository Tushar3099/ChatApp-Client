const defaultUser = {
  image: "https://www.flaticon.com/svg/static/icons/svg/847/847969.svg",
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
