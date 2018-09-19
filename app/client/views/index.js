import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initializeStore from "../store/index";

ReactDOM.render(
	<Provider store={initializeStore}>
		<div>teste</div>
	</Provider>,
	document.getElementById("root")
);
