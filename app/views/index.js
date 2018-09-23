import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../views/_app";
import { Layout } from "../components/layout";
import { Container } from "../components/container";
import Period from "../components/period";
import { periodFilter } from "../components/period/filters";
import Date, { getDate, dispatchDate } from "../components/date";
import Tasks from "../components/tasks";
import { tasksAction } from "../components/tasks/action";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filteredTasks: null
		};
	}

	changePeriod() {
		return this.setState(
			periodFilter({
				period: this.props.filters.period,
				tasks: this.props.tasks,
				date: this.props.filters.date
			})
		);
	}
	componentDidUpdate(oldProps) {
		if (oldProps.filters != this.props.filters) {
			this.changePeriod();
		}
	}

	componentDidMount() {
		axios
			.get("http://localhost:3000/tasks")
			.then(res => {
				this.props.tasksAction(res.data);
				this.props.dispatchDate(getDate());
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Layout>
				<Container>
					<Period />
					<Date />
					<Tasks filteredTasks={this.state.filteredTasks} />
				</Container>
			</Layout>
		);
	}
}

const mapStateToProps = state => state;

const mapDispatchToProps = dispach => {
	return bindActionCreators(
		{
			tasksAction,
			dispatchDate
		},
		dispach
	);
};
App(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(Home)
);
