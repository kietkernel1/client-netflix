import { legacy_createStore, combineReducers } from "redux";
import loginReducer from "./loginReducer";
const reducers = combineReducers({loginReducer})
const globalStore = legacy_createStore(reducers)

export default globalStore;