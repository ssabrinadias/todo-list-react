import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Layout } from "../components/layout";
import App from "../views/_app";

class Content extends Component {
	render() {
		return <Layout>BumBum</Layout>;
	}
}

App(Content);
