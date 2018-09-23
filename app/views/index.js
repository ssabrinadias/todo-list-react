import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../views/_app";
import { Layout } from "../components/layout";
import { Container } from "../components/container";
import PeriodChange from "../components/period";
import { periodFilter } from "../components/period/filters";
import DateChange from "../components/date";
import Tasks from "../components/tasks";
import { tasksAction } from "../components/tasks/action";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tags: null,
			period: {
				status: null
			},
			done: null,
			filteredTasks: null
		};
	}

	componentDidUpdate() {
		//period filter
		if (this.props.filters.period.status !== this.state.period.status) {
			this.setState(
				periodFilter({
					status: this.props.filters.period.status,
					tasks: this.props.tasks,
					date: "22/9/2018"
				})
			);
		}
	}

	componentDidMount() {
		axios
			.get("http://localhost:3000/tasks")
			.then(res => {
				this.props.tasksAction(res.data);
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Layout>
				<Container>
					<PeriodChange />
					<DateChange />
					<Tasks filteredTasks={this.state.filteredTasks} />
				</Container>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispach => {
	return bindActionCreators({ tasksAction }, dispach);
};
App(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Home)
);
