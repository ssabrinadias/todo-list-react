import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import initializeStore from "../store/index";

export default Content =>
	ReactDOM.render(
		<Provider store={initializeStore}>
			<Content />
		</Provider>,
		document.getElementById("root")
	);
