const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/stable2");

router.post("/stable", consulta);

module.exports = router;
