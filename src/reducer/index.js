import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import componentReducer from "./componentReducer";
import dashboardReducer from "./dashboardReducer";


export default combineReducers({
    dashboardReducer,
    accountReducer,
    componentReducer,
})