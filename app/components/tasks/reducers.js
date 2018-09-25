const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	// console.log('aqui', state)
	switch (action.type) {
		case "CHANGE_TASKS":
			return {
				...state,
				...action.value
			};
		case "UPDATE_TASKS":
			return {
				...state,
				...action.value
			};
		default:
			return state;
	}
};
