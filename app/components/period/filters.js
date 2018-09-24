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

const periodType = ({ dateItem, period, dates }) => {
	switch (period) {
		case "week":
			return dates.indexOf(dateItem) != -1;
		case "month":
			// const month = moment(date, "D/M/YYYY").format("M");
			return (
				moment(dateItem, "D/M/YYYY").format("M") ===
				moment(dates, "D/M/YYYY").format("M")
			);
		case "day":
			return dateItem == dates;
	}
};

export const methodPeriodFilter = ({ period, date, tasks }) => {
	const weekGroup = period === "week" && week(date);
	const filteredTasks = Object.values(tasks).filter(item => {
		moment.locale("pt-br");
		return periodType({
			dateItem: item.date,
			period,
			dates: weekGroup || date
		});
	});

	return {
		filteredTasks,
		dateShow: weekGroup || date
	};
};
