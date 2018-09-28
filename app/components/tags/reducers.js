const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	let countTask = Object.keys(state).length;
	switch (action.type) {
		case "GET_TAGS":
			return {
				...state,
				...action.value
			};
		case "UPDATE_TAGS":
			return {
				...state,
				[countTask]: {
					...action.value,
					id: (countTask + 1).toString()
				}
			};
		case "DELETE_TAGS":
			return Object.values(state).filter(({ id }) => id !== action.value);
		default:
			return state;
	}
};
