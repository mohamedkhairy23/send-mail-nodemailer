var express = require("express");
var path = require("path");
var logger = require("morgan");

var indexRouter = require("./routes/index");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", indexRouter);

app.listen(5000, () => {
  console.log("server is running!");
});
