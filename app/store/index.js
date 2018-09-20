import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import filters from "../initialReducers/filtersReducer";

const INITIAL_STATE = {};

export default createStore(
	combineReducers({
		filters
	}),
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(thunk))
);
