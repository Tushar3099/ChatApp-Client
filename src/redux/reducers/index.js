import { combineReducers } from "redux";
import UserReducer from "./user";
import TokenReducer from "./token";

const allReducer = combineReducers({
  user: UserReducer,
  token: TokenReducer,
});

export default allReducer;
