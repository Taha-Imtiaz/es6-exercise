import { combineReducers } from "redux";
import userReducer from './user/userReducer';

var rootReducer = combineReducers({
    users: userReducer
})
export default rootReducer