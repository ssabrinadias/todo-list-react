const express = require("express");
var path = require("path");

const app = express();
app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/dist/index.html");
});

app.listen(8080, () => {
	console.log("Listening on port 8080!");
});
