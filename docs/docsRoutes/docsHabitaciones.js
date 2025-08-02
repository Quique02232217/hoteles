/**
 * @swagger
 * components:
 *   schemas:
 *     TipoAcomodacion:
 *       type: object
 *       properties:
 *         codigo:
 *           type: string
 *           example: "DOBLE"
 *         detalle:
 *           type: string
 *           example: "Cómoda habitación doble"
 *
 *     Habitacion:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         descripcion:
 *           type: string
 *           example: "Vista interna"
 *         tipoAcomodacion:
 *           $ref: '#/components/schemas/TipoAcomodacion'
 *         ocupacionMax:
 *           type: integer
 *           example: 2
 *         precioNoche:
 *           type: number
 *           format: float
 *           example: 200
 *         capacidadInstalada:
 *           type: integer
 *           example: 2
 *         imagenes:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /habitacion/obtener:
 *   get:
 *     summary: Obtiene todas las habitaciones con su tipo de acomodación
 *     tags: [Habitaciones]
 *     responses:
 *       200:
 *         description: Lista de habitaciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Habitacion'
 */

/**
 * @swagger
 * /habitacion/crear:
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
