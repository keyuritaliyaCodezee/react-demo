import { combineReducers } from "redux";
import { userStore } from "./user.reducer";
import { apiStore } from "./apis.reducer";

const reducer = combineReducers({ userStore, apiStore })
export default reducer;