import axios from "axios";

export const getTasks = () =>
	axios
		.get("http://localhost:3000/tasks")
		.then(res => {
			Promise.resolve();
			return res.data;
		})
		.catch(err => console.log(err));
