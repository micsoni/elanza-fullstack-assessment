import { combineReducers } from "redux";
import user from "./reducers/user";
import careRequest from "./reducers/careRequest";

export const rootReducer = combineReducers({ user, careRequest });
