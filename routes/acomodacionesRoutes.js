const express = require("express");
const router = express.Router();
const acomodacionesController = require("../controller/acomodacionController");

/**
 * @swagger
 * /acomodacion/crear:
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

router.post("/crear", acomodacionesController.crearAcomodacion);
/**
 * @swagger
 * components:
 *   schemas:
 *     Acomodacion:
 *       type: object
 *       properties:
 *         id_acomodacion:
 *           type: integer
 *           example: 4
 *         ref_tipo_acomodacion:
 *           type: string
 *           example: "TIPO1"
 *         descripcion:
 *           type: string
 *           example: "Texto"
 *         ocupacion_max:
 *           type: integer
 *           example: 2
 *         precio_noche:
 *           type: string
 *           example: "100.00"
 *         imagenes:
 *           type: string
 *           example: "imagen.jpg"
 *         capacidad_instalada:
 *           type: integer
 *           example: 2
 *         activo:
 *           type: integer
 *           example: 1
 *         fecha_creacion:
 *           type: string
 *           format: date-time
 *           example: "2025-07-22T20:08:58.000Z"
 *         fecha_actualizacion:
 *           type: string
 *           format: date-time
 *           example: "2025-07-22T20:08:58.000Z"
 */

/**
 * @swagger
 * /acomodacion/obtener:
 *   get:
 *     summary: Obtiene todas las acomodaciones
 *     tags: [Acomodaciones]
 *     responses:
 *       200:
 *         description: Lista de habitaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Acomodacion'
 */

router.get("/obtener", acomodacionesController.listarAcomodaciones);

/**
 * @swagger
 * /acomodacion/obtener/{ref_tipo_acomodacion}:
 *   get:
 *     summary: Obtener acomodaciones por tipo
 *     tags: [Acomodaciones]
 *     parameters:
 *       - in: path
 *         name: ref_tipo_acomodacion
 *         schema:
 *           type: string
 *         required: true
 *         description: Tipo de acomodación
 *     responses:
 *       200:
 *         description: Lista filtrada de acomodaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Acomodacion'
 */
router.get(
  "/obtener/:ref_tipo_acomodacion",
  acomodacionesController.listarAcomodacionPorReferencia
);

module.exports = router;
