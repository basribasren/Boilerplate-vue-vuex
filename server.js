const express = require("express");
const path = require("path");
var helmet = require("helmet");
var cors = require("cors");
var favicon = require("serve-favicon");
var logger = require("morgan");
var compression = require("compression");

const port = process.env.PORT || 8080;
const app = express();

app.use(favicon(path.join(__dirname, "dist", "favicon.ico")));
app.use(logger("dev"));
app.use(helmet());
app.use(cors());
app.use(compression());

// the __dirname is the current directory from where the script is running
app.use(express.static(path.join(__dirname, "dist")));

// send the user to index html page inspite of the url
app.get("*", (req, res) => {
	res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error("Not Found");
	err.status = 404;
	next(err);
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get("env") === "development" ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render("error");
});

app.listen(port);
