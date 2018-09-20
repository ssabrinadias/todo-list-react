const INITIAL_STATE = {
	period: "day",
	tags: [],
	done: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CHANGE_FILTERS":
			return {
				value: "FILTER"
			};
		default:
			return state;
	}
};
