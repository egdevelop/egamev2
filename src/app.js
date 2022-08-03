const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

require("dotenv").config();
const middlewares = require("./middlewares");
const api = require("./api");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());

app.use("/api", api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
