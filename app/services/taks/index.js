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

export function edit(id, params) {
	return axios
		.put(
			`http://localhost:3000/tasks${id}`,
			{
				params
			},
			{
				headers: {
					"Content-Type": "application/json"
				}
			}
		)
		.then(function(response) {
			return console.log(res.json(response.data));
		})
		.catch(function(error) {
			return error;
		});
}
