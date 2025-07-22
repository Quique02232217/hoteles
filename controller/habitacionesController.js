const habitacionesService = require("../services/habitacionService");
const { agregarHabitacion } = require("../services/habitacionService");

async function getAll(req, res) {
  try {
    const data = await habitacionesService.listarInfoHabitaciones();
    res.json(data);
  } catch (error) {
    console.error("Error al obtener habitaciones", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
}

async function postHabitacion(req, res) {
  try {
    const id = await agregarHabitacion(req.body);
    res.status(201).json({ message: "Habitación creada", id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la habitación" });
  }
}

module.exports = {
  getAll,
  postHabitacion,
};
