const express = require("express");
const router = express.Router();

const { consulta } = require("../controllers/data_delete");

router.delete("/data/:id", consulta);

module.exports = router;
