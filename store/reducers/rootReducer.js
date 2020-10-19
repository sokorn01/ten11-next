import { combineReducers } from "redux";
import menuReduncer from "./menuReduncer";
import accountReducer from "./accountReducer";
import productReducer from "./productReducer";
import metaDataReducer from "./metaDataReducer";

// COMBINED REDUCERS
const reducers = {
  menu: menuReduncer,
  account: accountReducer,
  product: productReducer,
  metadata: metaDataReducer,
};

export default combineReducers(reducers);
