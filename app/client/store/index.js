import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import saudacao from "../components/teste/saudacaoReducer";

const INITIAL_STATE = {};

export default createStore(
	combineReducers({
		saudacao
	}),
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(thunk))
);
