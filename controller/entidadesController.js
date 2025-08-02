const entidadesService = require("../services/entidadesService");

async function getAll(req, res) {
  try {
    const data = await entidadesService.listarEntidades();
    res.json(data);
  } catch (error) {
    console.error("Error al obtener habitaciones", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function crear(req, res) {
  try {
    const nuevaEntidad = await entidadesService.crearEntidad(req.body);
    res.status(201).json(nuevaEntidad);
  } catch (error) {
    console.error("Error al crear entidad", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

module.exports = {
  getAll,
  crear,
};
