const express = require("express");
const router = express.Router();
const AcomodacionesController = require("../controller/acomodacionController");

/**
 * @swagger
 * /api/acomodaciones:
 *   post:
 *     summary: Crea una nueva acomodación
 *     tags: [Acomodaciones]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - ref_tipo_acomodacion
 *               - ocupacion_max
 *               - precio_noche
 *             properties:
 *               ref_tipo_acomodacion:
 *                 type: string
 *                 example: "TIPO1"
 *               descripcion:
 *                 type: string
 *                 example: "Texto"
 *               ocupacion_max:
 *                 type: integer
 *                 example: 2
 *               precio_noche:
 *                 type: number
 *                 format: float
 *                 example: 100.00
 *               imagenes:
 *                 type: string
 *                 example: "imagen.jpg"
 *               capacidad_instalada:
 *                 type: integer
 *                 example: 2
 *               activo:
 *                 type: boolean
 *                 example: true
 *     responses:
 *       201:
 *         description: Acomodación creada exitosamente
 *       500:
 *         description: Error del servidor
 */

router.post("/crear", AcomodacionesController.crearAcomodacion);

module.exports = router;
