import { combineReducers } from "redux";
import BatReducer from "./batReduce";
import BallReducer from "./ballReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    bat : BatReducer,
    ball : BallReducer,
    user : userReducer
})

export default rootReducer;