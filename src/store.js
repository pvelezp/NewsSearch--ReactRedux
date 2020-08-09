import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducers from "./reducers";
// middleware
// add middleware inside this function
const middleware = applyMiddleware(thunk);

// Store
const store = createStore(Reducers, middleware);

export default store;
