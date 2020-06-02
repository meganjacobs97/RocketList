import isLoggedIn from "./isLogged";
import MakeAPost from "./MakeAPost";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  isLoggedIn,
  MakeAPost,
});

export default allReducer;
