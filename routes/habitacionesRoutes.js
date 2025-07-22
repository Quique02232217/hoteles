const express = require("express");
const router = express.Router();
const HabitacionesController = require("../controller/habitacionesController");

/**
 * @swagger
 * /habitacion/obtener:
 *   get:
 *     summary: Obtiene todas las habitaciones con su tipo de acomodación
 *     tags: [Habitaciones]
 *     responses:
 *       200:
 *         description: Lista de habitaciones
 */

router.get("/obtener", HabitacionesController.getAll);

/**
 * @swagger
 * /api/habitaciones:
 *   post:
 *     summary: Crea una nueva habitación
 *     tags: [Habitaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - id_acomodacion
 *               - numero_habitacion
 *               - estado
 *             properties:
 *               id_acomodacion:
 *                 type: integer
 *                 example: 1
 *               numero_habitacion:
 *                 type: string
 *                 example: "101"
 *               descripcion:
 *                 type: string
 *                 example: "Habitación con balcón"
 *               piso:
 *                 type: string
 *                 example: "1"
 *               estado:
 *                 type: string
 *                 enum: [DISPONIBLE, OCUPADA, MATENIMIENTO, FUERA_DE_SERVICIO]
 *                 example: "DISPONIBLE"
 *               caracteristicas:
 *                 type: string
 *                 example: "['Vista al mar', 'Balcón']"
 *               activo:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Habitación creada exitosamente
 *       500:
 *         description: Error del servidor
 */

router.post("/crear", HabitacionesController.postHabitacion);
module.exports = router;
