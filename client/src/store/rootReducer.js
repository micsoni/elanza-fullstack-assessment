import { combineReducers } from "redux";
import user from "./reducers/user";
import careRequests from "./reducers/careRequests";

export const rootReducer = combineReducers({ user, careRequests });
