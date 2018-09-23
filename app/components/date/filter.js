import moment from "moment";
import { dateAction } from "./action";

export const datedFilter = () => {
	return moment().format("D/M/YYYY");
};

const mapStateToProps = state => state;

const mapDispatchToProps = dispach => {
	return bindActionCreators({ dateAction }, dispach);
};
App(
	connect(
		mapStateToProps,
		mapDispatchToProps
	)(datedFilter)
);
