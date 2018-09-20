import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../views/_app";
import { Layout } from "../components/layout";
import { Container } from "../components/container";
import { PeriodFilter } from "../components/periodFilter";

class Home extends Component {
	render() {
		console.log(this.props);
		return (
			<Layout>
				<Container>
					<PeriodFilter />
				</Container>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

App(connect(mapStateToProps)(Home));
