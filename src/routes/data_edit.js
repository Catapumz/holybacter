const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/data_edit");

router.put("/data/:id", consulta);

module.exports = router;
