const express = require("express");
const app = express();
const mongoose = require("mongoose");
const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();

// use json parser middleware
app.use(express.json());

// connect to database
const DB_CONNECTION = require("./config/DbConnection");
DB_CONNECTION();

// build request from router and controllers
app.use("/api/tasks", require("./Routes/tasksRoutes"));

// call error handler middleware
app.use(errorHandler);

//start server
let port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`app listining in port ${port}`);
});
