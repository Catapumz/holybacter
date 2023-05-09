const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/data_create");

router.post("/data", consulta);

module.exports = router;
