import reducerMyBag from "./myBag";
import Helper from './helpers'
import reducerUser from "./users"
import reducerProduct from './product'
import { combineReducers } from "redux";
const reducers = {
  myBag: reducerMyBag,
  Helpers: Helper,
  user: reducerUser,
  product: reducerProduct
};

export default combineReducers(reducers);
