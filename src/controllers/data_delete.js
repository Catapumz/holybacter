const Stack = require("../models/Stack");
const moment = require("moment");

const consulta = async (req, res) => {
  let stackId = req.params.id;
  let parametros = req.body;

  try {
    Stack.findByIdAndDelete(stackId, (error, stackupdated) => {
      return res.status(200).json({
        itinerario: stackupdated,
        mensaje: "Stack delete success",
      });
    });
  } catch (error) {
    return res.status(400).json({
      mensaje: "There was an error",
    });
  }
};

module.exports = { consulta };
