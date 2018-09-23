const INITIAL_STATE = {
	date: "",
	period: "day",
	tags: "",
	done: "all"
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CHANGE_PERIOD":
			return {
				...state,
				period: action.value
			};
		case "CHANGE_DATE":
			return {
				...state,
				date: action.value
			};
		default:
			return state;
	}
};
