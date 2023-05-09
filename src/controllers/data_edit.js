const Stack = require("../models/Stack");
const moment = require("moment");

const consulta = async (req, res) => {
  let stackId = req.params.id;
  let parametros = req.body;
  parametros.edited_at = moment();

  try {
    const stackupdated = await Stack.findByIdAndUpdate(stackId, parametros, {
      new: true,
    });

    return res.status(200).json({
      itinerario: stackupdated,
      mensaje: "Stack updated successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: error,
      mensaje: "There was an error",
    });
  }
};

module.exports = { consulta };
