import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import filters from "../services/getFilter/reducer";
import tasks from "../components/tasks/reducers";
import tags from "../components/tags/reducers";

const INITIAL_STATE = {};

export default createStore(
	combineReducers({
		filters,
		tasks,
		tags
	}),
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(thunk))
);
