import test from "./test";
import reducerMyBag from "./myBag";
import { combineReducers } from "redux";
const reducers = {
  tests: test,
  myBag: reducerMyBag,
};

export default combineReducers(reducers);
