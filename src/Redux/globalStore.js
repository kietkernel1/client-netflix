import { legacy_createStore, combineReducers } from "redux";
import userReducer from "./userReducer";
const reducers = combineReducers({userReducer})
const globalStore = legacy_createStore(reducers)

export default globalStore;