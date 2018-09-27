import moment from "moment";
const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
	let countTask = Object.keys(state).length;
	switch (action.type) {
		case "CHANGE_TASKS":
			return {
				...state,
				...action.value
			};
		case "UPDATE_TASKS":
			return {
				...state,
				[countTask]: {
					...action.value,
					createdAt: moment().format("DD/MM/YYYY"),
					id: (countTask + 1).toString()
				}
			};
		case "DELETE_TASKS":
			return Object.values(state).filter(({ id }) => id !== action.value);
		default:
			return state;
	}
};
