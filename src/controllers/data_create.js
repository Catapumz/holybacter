const Stack = require("../models/Stack");
const moment = require("moment");

const consulta = async (req, res) => {
  try {
    const parametros = req.body;
    parametros.edited_at = moment();

    const articulo = new Stack(parametros);

    await articulo.save();

    return res.status(200).json({
      stack: articulo,
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "There was an error",
    });
  }
};

module.exports = { consulta };
