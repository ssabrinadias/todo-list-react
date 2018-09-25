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
