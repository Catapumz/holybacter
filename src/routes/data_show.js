const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/data_show");

router.get("/data", consulta);

module.exports = router;
