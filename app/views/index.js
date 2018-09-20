import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "../views/_app";
import { Layout } from "../components/layout";
import { Container } from "../components/container";

class Content extends Component {
	render() {
		return (
			<Layout>
				<Container>teste</Container>
			</Layout>
		);
	}
}

App(Content);
