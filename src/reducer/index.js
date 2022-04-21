import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import appReducer from "./appReducer";
import componentReducer from "./componentReducer";
import dashboardReducer from "./dashboardReducer";


export default combineReducers({
    dashboardReducer,
    accountReducer,
    componentReducer,
    appReducer
})