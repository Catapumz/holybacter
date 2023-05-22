const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/teststable");

router.get("/stable", consulta);

module.exports = router;
