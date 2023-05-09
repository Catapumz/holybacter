const Stack = require("../models/Stack");

const consulta = async (req, res) => {
  try {
    const stack = await Stack.find({});
    console.log(stack);

    let stackToShow = {
      volValue: stack[0].volValue,
      ph_act: stack[0].ph_act,
      tds_Value: stack[0].tds_value,
    };
    return res.status(200).json({
      stack_data: stackToShow,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      mensaje: "There was an error",
    });
  }
};

module.exports = { consulta };
