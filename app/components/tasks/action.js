export const tasksAction = value => {
	return {
		type: "CHANGE_TASKS",
		value
	};
};

export const tasksUpdateAction = value => {
	return {
		type: "UPDATE_TASKS",
		value
	};
};

export const tasksDeleteAction = value => {
	return {
		type: "DELETE_TASKS",
		value
	};
};
