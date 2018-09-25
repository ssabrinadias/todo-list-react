const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case "GET_TAGS":
			return {
				...state,
				...action.value
			};
		default:
			return state;
	}
};
