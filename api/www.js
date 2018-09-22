const express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const tags = require("./routes/tags");
const tasks = require("./routes/tasks");
const app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "http://localhost:8000");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

app.use("/tags", tags);
app.use("/tasks", tasks);

app.listen(3000, () => {
	console.log("Listening on port 3000!");
});
