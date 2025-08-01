const entidadesModel = require("../models/entidades");

async function listarEntidades() {
  const entidadRaw = await entidadesModel.obtenerInformacionEntidades();
  const entidadesInfo = entidadRaw.map((e) => ({
    entidad: e.entidad,
    codigo: e.codigo,
    detalle: e.detalle,
  }));
  return entidadesInfo;
}

async function crearEntidad(data) {
  const newId = await entidadesModel.crearEntidad(data);
  return { id: newId, ...data };
}

module.exports = {
  listarEntidades,
  crearEntidad,
};
