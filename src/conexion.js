const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const conexion = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/holybacter");
  //await mongoose.connect("mongodb://mongo:3010/holybacter"); // esto para amazon
  console.log("Conectado correctamente a la base de datos de holybacter");
};

module.exports = {
  conexion,
};
