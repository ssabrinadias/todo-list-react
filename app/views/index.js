import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../views/_app";
import { Layout, Container } from "../designStructure";
import Period, { periodFilter } from "../components/period";
import Date, { getDate, dispatchDate } from "../components/date";
import Tasks, { dispatchTasks } from "../components/tasks";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filteredTasks: null,
			dateShow: null
		};
	}

	componentDidUpdate(oldProps) {
		if (oldProps.filters != this.props.filters) {
			this.setState(
				periodFilter({
					period: this.props.filters.period,
					tasks: this.props.tasks,
					date: this.props.filters.date
				})
			);
		}
	}

	componentDidMount() {
		axios
			.get("http://localhost:3000/tasks")
			.then(res => {
				this.props.dispatchTasks(res.data);
				this.props.dispatchDate(getDate());
			})
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Layout>
				<Container>
					<Period />
					<Date dateShow={this.state.dateShow} />
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
			dispatchTasks,
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
