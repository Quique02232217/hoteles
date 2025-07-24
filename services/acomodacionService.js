const acomodacionModel = require("../models/acomodacion");

async function agregarAcomodacion(data) {
  return await acomodacionModel.crearAcomodacion(data);
}

async function listarAcomidaciones() {
  const lista_acomodaciones = await acomodacionModel.obtenerAcomodacion();
  return lista_acomodaciones;
}

async function listarAcomodacionPorReferencia(referencia) {
  const lista_acomodaciones =
    await acomodacionModel.obtenerAcomodacionPorReferencia(referencia);
  return lista_acomodaciones;
}
module.exports = {
  agregarAcomodacion,
  listarAcomidaciones,
  listarAcomodacionPorReferencia,
};
