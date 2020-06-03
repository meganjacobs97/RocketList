import allReducers from "./reducers";
import { createStore } from "redux";

const store = createStore(allReducers);

export default store;
