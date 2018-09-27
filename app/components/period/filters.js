import moment from "moment";

const week = date => {
	let day = moment(date, "DD/MM/YYYY").format("D");
	let dayOfWeek = moment(date, "DD/MM/YYYY").weekday();
	const initialDate = [
		moment(date, "DD/MM/YYYY")
			.subtract(dayOfWeek, "days")
			.format("DD/MM/YYYY")
	];

	for (var i = 1; i < 7; i++) {
		initialDate.push(
			moment(initialDate[0], "DD/MM/YYYY")
				.add(i, "days")
				.format("DD/MM/YYYY")
		);
	}
	return initialDate;
};

const periodType = ({ dateItem, period, dates }) => {
	dateItem = moment(dateItem, "YYYY-MM-DD").format("DD/MM/YYYY");
	switch (period) {
		case "week":
			return dates.indexOf(dateItem) != -1;
		case "month":
			return (
				moment(dateItem, "DD/MM/YYYY").format("M") ===
				moment(dates, "DD/MM/YYYY").format("M")
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
