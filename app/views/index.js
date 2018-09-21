import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../views/_app";
import { Layout } from "../components/layout";
import { Container } from "../components/container";
import PeriodFilter from "../components/periodFilter";
import Tasks from "../components/tasks";

class Home extends Component {
	construct(props) {
		Super(props);
	}

	// getTasks() {
	// 	return axios.get('http://localhost:3000/tasks')
	// 	.the(res=>(
	// 		console.log(res.data)
	// 	))
	// 	.catch(error => {
	// 		console.log(error)
	// 	});
	// }

	// componentDidMount (){
	// 	this.getTasks();
	// }

	render() {
		console.log(this.props);
		return (
			<Layout>
				<Container>
					<PeriodFilter />
					<Tasks />
				</Container>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

App(connect(mapStateToProps)(Home));
