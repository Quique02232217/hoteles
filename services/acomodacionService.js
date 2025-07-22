const acomodacionModel = require("../models/acomodacion");

async function agregarAcomodacion(data) {
  return await acomodacionModel.crearAcomodacion(data);
}
module.exports = { agregarAcomodacion };
