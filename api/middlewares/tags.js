const axios = require("axios");

async function get(req, res, next) {
	return await axios
		.get(
			`http://5ba1adacee710f0014dd767e.mockapi.io/tags/${(req.params || {})
				.id || ""}`
		)
		.then(function(response) {
			return next();
		})
		.catch(function(error) {
			return error;
		});
}

async function create(req, res, next) {
	return await axios
		.post(`http://5ba1adacee710f0014dd767e.mockapi.io/tags/`, {
			createdAt: "15/12/2016",
			name: "teste",
			color: "teste2"
		})
		.then(function(response) {
			return next();
		})
		.catch(function(error) {
			return error;
		});
}

async function edit(req, res, next) {
	return await axios
		.put(`http://5ba1adacee710f0014dd767e.mockapi.io/tags/${req.params.id}`, {
			name: "teste",
			color: "rola"
		})
		.then(function(response) {
			return next();
		})
		.catch(function(error) {
			return error;
		});
}

async function delet(req, res, next) {
	return await axios
		.delete(`http://5ba1adacee710f0014dd767e.mockapi.io/tags/${req.params.id}`)
		.then(function(response) {
			return next();
		})
		.catch(function(error) {
			return error;
		});
}

module.exports = { get, create, edit, delet };
