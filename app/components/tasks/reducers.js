const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "CHANGE_TASKS":
			return {
				...state,
				...action.value
			};
		default:
			return state;
	}
};
