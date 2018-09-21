const INITIAL_STATE = {
	period: "day",
	tags: [],
	done: false
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CHANGE_PERIOD":
			return {
				...state,
				period: action.value
			};
		default:
			return state;
	}
};
