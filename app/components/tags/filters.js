export const methodTagsdFilter = ({ tasks, label }) => {
	return Object.values(tasks).filter(
		value => label === "all" || value.tags.indexOf(parseInt(label)) != -1
	);
};
