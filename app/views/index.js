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
import { tasksAction } from "../services/getTasks/action";
import moment from "moment";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			tags: null,
			period: {
				status: null
			},
			done: null,
			filteredTasks: null,
			tasks: {}
		};
	}

	periodFilter(status, date) {
		date = date || moment().format("D/M/YYYY");
		const weeks = {
			Monday: 1,
			Tuesday: 2,
			Wednesday: 3,
			Thursday: 4,
			Friday: 5,
			Saturday: 6,
			Sunday: 7
		};
		const typeDate = type => {
			switch (status) {
				case "week":
					let week = moment(date, "D/M/YYYY").format("dddd");
					console.log("oi", week);
					return true;
				case "month":
					const month = moment(date, "D/M/YYYY").format("M");
					return true;
				case "day":
					return true;
			}
		};
		console.log(this.props.tasks);
		const filteredTasks = Object.values(this.props.tasks).filter(item =>
			typeDate(item.date)
		);

		return this.setState({
			period: {
				status,
				date
			},
			filteredTasks
		});
	}

	componentDidUpdate() {
		//filter period
		if (this.props.filters.period.status !== this.state.period.status) {
			this.periodFilter(this.props.filters.period.status);
		}
	}

	componentDidMount() {
		axios
			.get("http://localhost:3000/tasks")
			.then(res => {
				console.log("aqui");
				this.props.tasksAction(res.data);

				this.setState({
					filteredTasks: res.data,
					tasks: res.data
				});
			})
			.catch(err => console.log(err));
	}

	render() {
		console.log(this.state.filteredTasks);
		return (
			<Layout>
				<Container>
					<PeriodFilter />
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
