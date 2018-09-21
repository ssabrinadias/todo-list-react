export const periodAction = value => {
	console.log(value);
	return {
		type: "CHANGE_PERIOD",
		value
	};
};
