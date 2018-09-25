const INITIAL_STATE = {
	date: "",
	period: "day",
	tags: "all",
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

		case "CHANGE_TAGS":
			return {
				...state,
				tags: action.value
			};

		case "CHANGE_DONE":
			return {
				...state,
				done: action.value === "all" ? action.value : JSON.parse(action.value)
			};
		default:
			return state;
	}
};
