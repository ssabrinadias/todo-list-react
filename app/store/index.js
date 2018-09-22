import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import filters from "../services/getFilter/reducer";
import tasks from "../services/getTasks/reducers";

const INITIAL_STATE = {};

export default createStore(
	combineReducers({
		filters,
		tasks
	}),
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(thunk))
);
