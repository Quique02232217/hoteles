const express = require("express");
const router = express.Router();
const entidadesController = require("../controller/entidadesController");

router.get("/obtener", entidadesController.getAll);

module.exports = router;
