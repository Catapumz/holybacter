const express = require("express");
const cors = require("cors");

//routes
const data_show = require("./routes/data_show");
const data_create = require("./routes/data_create");
const data_edit = require("./routes/data_edit");
const data_delete = require("./routes/data_delete");
const stable = require("./routes/teststable");

//Crear servidor Node
const app = express();

app.use(cors()); //middleware (?)

//Convertir body a objeto js
app.use(express.json()); //recibir datos con content-type app/json
app.use(express.urlencoded({ extended: true })); //recibir datos form-urlencoded

app.use("/", data_show);
app.use("/", data_create);
app.use("/", data_edit);
app.use("/", data_delete);
app.use("/", stable);

module.exports = { app };
