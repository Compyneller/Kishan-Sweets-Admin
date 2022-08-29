import { createStore, applyMiddleware } from "redux";
import reducers from "redux/reducers";
import thunk from "redux-thunk";

const intialState = {};

export const store = createStore(reducers, intialState, applyMiddleware(thunk));
