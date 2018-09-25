import axios from "axios";

export function get(id) {
	return axios
		.get(`http://localhost:3000/tasks${id || ""}`)
		.then(function(response) {
			return res.json(response.data);
		})
		.catch(function(error) {
			return error;
		});
}

export async function edit(id, params) {
	try {
		return new Promise(function(resolve, reject) {
			const res = axios
				.post(
					`http://localhost:3000/tasks/edit/${id}`,
					{ ...params },
					{ headers: { "Content-Type": "application/json" } }
				)
				.then(res => console.log(res));
			resolve(true);
		});
	} catch (err) {
		return reject(err);
	}
}
