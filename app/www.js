const express = require("express");
var path = require("path");
var cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

app.listen(8080, () => {
	console.log("Listening on port 8080!");
});
