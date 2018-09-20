import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initializeStore from "../store/index";
import Content from "../components/content";

ReactDOM.render(
	<Provider store={initializeStore}>
		<Content />
	</Provider>,
	document.getElementById("root")
);
