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

const dateType = ({ dateItem, period, dates }) => {
	switch (period) {
		case "week":
			return dates.indexOf(dateItem) != -1;
		case "month":
			// const month = moment(date, "D/M/YYYY").format("M");
			return true;
		case "day":
			return dateItem == dates;
	}
};

export const periodFilter = ({ period, date, tasks }) => {
	console.log("date", date);
	const weekGroup = status === "week" && week(date);
	console.log(period);
	const filteredTasks = Object.values(tasks).filter(item => {
		return dateType({
			dateItem: item.date,
			period,
			dates: weekGroup || date
		});
	});

	return {
		filteredTasks
	};
};
