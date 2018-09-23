import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { tasksAction } from "./action";

export const getTasks = () => {
	axios
		.get("http://localhost:3000/tasks")
		.then(res => {
			this.props.tasksAction(res.data);
		})
		.catch(err => console.log(err));
};
