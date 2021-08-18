import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import financeReducer from "./finance/financeSlice";
import usersReducer from "./users/usersSlice";

const rootReducer = combineReducers({
  authReducer,
  financeReducer,
  usersReducer,
});

export default rootReducer;
