import axios from "axios";

export async function create(params) {
	return await axios
		.post(
			`http://localhost:3000/tags/create`,
			{ ...params },
			{ headers: { "Content-Type": "application/json" } }
		)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}

export async function delet(id) {
	return await axios
		.post(`http://localhost:3000/tags/delete/${id || ""}`)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}
