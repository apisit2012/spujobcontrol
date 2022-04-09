import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import dashboardReducer from "./dashboardReducer";


export default combineReducers({
    dashboardReducer,
    accountReducer,
})