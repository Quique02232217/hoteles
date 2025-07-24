const acomodacionService = require("../services/acomodacionService");

async function crearAcomodacion(req, res) {
  try {
    const id = await acomodacionService.agregarAcomodacion(req.body);
    res.status(201).json({ message: "Acomodación creada", id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al crear la acomodación" });
  }
}

async function listarAcomodaciones(req, res) {
  try {
    const acodamaciones = await acomodacionService.listarAcomidaciones();
    res.status(200).json(acodamaciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al listar las acomodaciones" });
  }
}

async function listarAcomodacionPorReferencia(req, res) {
  try {
    const { ref_tipo_acomodacion } = req.params;
    const acomodaciones =
      await acomodacionService.listarAcomodacionPorReferencia(
        ref_tipo_acomodacion
      );
    res.status(200).json(acomodaciones);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al listar acomodación por referencia" });
  }
}

module.exports = {
  crearAcomodacion,
  listarAcomodaciones,
  listarAcomodacionPorReferencia,
};
