const { agregarAcomodacion } = require("../services/acomodacionService");

async function crearAcomodacion(req, res) {
  try {
    const id = await agregarAcomodacion(req.body);
    res.status(201).json({ message: "Acomodación creada", id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la acomodación" });
  }
}

module.exports = { crearAcomodacion };
