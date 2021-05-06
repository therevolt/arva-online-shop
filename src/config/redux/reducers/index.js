import reducerMyBag from "./myBag";
import Helper from './helpers'
import { combineReducers } from "redux";
const reducers = {
  myBag: reducerMyBag,
  Helpers: Helper
};

export default combineReducers(reducers);
