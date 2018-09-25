import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import App from "../views/_app";
import { Layout, Container, Filter } from "../designStructure";
import Period, { periodFilter } from "../components/period";
import Date, { getDate, dispatchDate } from "../components/date";
import Tasks, { dispatchTasks } from "../components/tasks";
import Tags, { dispatchGetTags, tagsFilter } from "../components/tags";
import Done, { doneFilter } from "../components/done";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			filteredTasks: null,
			dateShow: null
		};
	}

	componentDidUpdate(oldProps) {
		let labelTag = this.props.filters.tags;
		let labelDone = this.props.filters.done;

		if (oldProps != this.props) {
			let steps = periodFilter({
				period: this.props.filters.period,
				tasks: this.props.tasks,
				date: this.props.filters.date
			});

			steps.filteredTasks = tagsFilter({
				tasks: steps.filteredTasks,
				label: labelTag
			});

			steps.filteredTasks = doneFilter({
				tasks: steps.filteredTasks,
				label: labelDone
			});
			this.setState({
				filteredTasks: steps.filteredTasks,
				dateShow: steps.dateShow
			});
		}
	}

	componentDidMount() {
		axios
			.all([
				axios.get("http://localhost:3000/tags"),
				axios.get("http://localhost:3000/tasks")
			])
			.then(
				axios.spread((tags, tasks) => {
					this.props.dispatchTasks(tasks.data);
					this.props.dispatchGetTags(tags.data);
					this.props.dispatchDate(getDate());
				})
			)
			.catch(err => console.log(err));
	}

	render() {
		return (
			<Layout>
				<Container>
					<Period />
					<Date dateShow={this.state.dateShow} />
					<Filter>
						<Tags tags={this.props.tags} />
						<Done />
					</Filter>
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
			dispatchDate,
			dispatchGetTags
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
