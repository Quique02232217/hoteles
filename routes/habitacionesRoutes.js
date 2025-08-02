const express = require("express");
const router = express.Router();
const HabitacionesController = require("../controller/habitacionesController");

router.get("/obtener", HabitacionesController.getAll);

router.post("/crear", HabitacionesController.postHabitacion);
module.exports = router;
