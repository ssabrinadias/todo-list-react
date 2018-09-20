const express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
const tags = require("./routes/tags");
const tasks = require("./routes/tasks");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/tags", tags);
app.use("/tasks", tasks);

app.listen(3000, () => {
	console.log("Listening on port 3000!");
});
