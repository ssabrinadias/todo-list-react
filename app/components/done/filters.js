export const methodDonedFilter = ({ tasks, label }) => {
	return Object.values(tasks).filter(
		value => label === "all" || value.done === label
	);
};
