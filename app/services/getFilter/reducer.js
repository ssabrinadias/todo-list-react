const INITIAL_STATE = {
	period: {
		status: "day"
	},
	tags: "",
	done: "all"
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CHANGE_PERIOD":
			return {
				...state,
				period: {
					...state.period,
					status: action.value
				}
			};
		default:
			return state;
	}
};
