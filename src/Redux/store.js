import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import thunk  from 'redux-thunk';

var middleware = [thunk]

var store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleware)))
export default store