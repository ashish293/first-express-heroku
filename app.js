const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
	res.write("Hello from Express");
	res.write("I am ashish");
});
app.get("/ashish", (req, res) => {
	res.write("Hello, This is ashish");
});
app.listen(port, () => {
	console.log("Listening on port " + port);
});
