export const getTagsAction = value => {
	return {
		type: "GET_TAGS",
		value
	};
};

export const tagsAction = value => {
	return {
		type: "CHANGE_TAGS",
		value
	};
};

export const tagsUpdateAction = value => {
	return {
		type: "UPDATE_TAGS",
		value
	};
};

export const tagsDeleteAction = value => {
	return {
		type: "DELETE_TAGS",
		value
	};
};
