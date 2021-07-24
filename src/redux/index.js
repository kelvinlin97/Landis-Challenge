import { combineReducers } from "redux";
import accountsReducer from "./accounts";
const appReducer = combineReducers({
  accounts: accountsReducer
});

export default appReducer;
