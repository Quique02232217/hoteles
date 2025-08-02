const express = require("express");
const router = express.Router();
const acomodacionesController = require("../controller/acomodacionController");

router.post("/crear", acomodacionesController.crearAcomodacion);

router.get("/obtener", acomodacionesController.listarAcomodaciones);

router.get(
  "/obtener/:ref_tipo_acomodacion",
  acomodacionesController.listarAcomodacionPorReferencia
);

module.exports = router;
