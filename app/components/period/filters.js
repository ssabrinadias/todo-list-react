import moment from "moment";

const week = date => {
	let day = moment(date, "D/M/YYYY").format("D");
	let dayOfWeek = moment(date, "D/M/YYYY").weekday();
	const initialDate = [
		moment(date, "D/M/YYYY")
			.subtract(dayOfWeek, "days")
			.format("D/M/YYYY")
	];

	for (var i = 1; i < 7; i++) {
		initialDate.push(
			moment(initialDate[0], "D/M/YYYY")
				.add(i, "days")
				.format("D/M/YYYY")
		);
	}
	return initialDate;
};

const dateType = ({ dateItem, status, dates }) => {
	switch (status) {
		case "week":
			return dates.indexOf(dateItem) != -1;
		case "month":
			// const month = moment(date, "D/M/YYYY").format("M");
			return true;
		case "day":
			return dateItem == dates;
	}
};

export const periodFilter = ({ status, date, tasks }) => {
	date = date || moment().format("D/M/YYYY");
	const weekGroup = status === "week" && week(date);

	const filteredTasks = Object.values(tasks).filter(item => {
		return dateType({
			dateItem: item.date,
			status,
			dates: weekGroup || date
		});
	});

	return {
		period: {
			status,
			date
		},
		filteredTasks
	};
};
