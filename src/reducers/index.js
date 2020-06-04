import isLoggedIn from "./isLogged";
import MakeAPost from "./MakeAPost";
import ShowLoginBox from "./ShowLoginBox";
import ShowCats from "./ShowCats";
import ShowSubCats from "./ShowSubCats";
import { combineReducers } from "redux";

const allReducer = combineReducers({
  isLoggedIn,
  MakeAPost,
  ShowLoginBox,
  ShowCats,
  ShowSubCats,
});

export default allReducer;
