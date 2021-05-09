import reducerMyBag from "./myBag";
import Helper from './helpers'
import reducerUser from "./users"
import reducerProduct from './product'
import reducerCart from './carts'
import reducerSeller from './seller'
import { combineReducers } from "redux";
import orderReducer from "./order";
const reducers = {
  myBag: reducerMyBag,
  Helpers: Helper,
  user: reducerUser,
  product: reducerProduct,
  carts: reducerCart,
  order: orderReducer,
  seller: reducerSeller
};

export default combineReducers(reducers);
