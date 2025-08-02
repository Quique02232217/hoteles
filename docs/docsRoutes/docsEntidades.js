/**
 * @swagger
 * tags:
 *   - name: Entidades
 *     description: Endpoints relacionados con las entidades del sistema
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Entidad:
 *       type: object
 *       properties:
 *         entidad:
 *           type: string
 *           example: "CATEGORIA_SERVICIO"
 *         codigo:
 *           type: string
 *           example: "SPA"
 *         detalle:
 *           type: string
 *           example: "Servicios de Spa"
 */

/**
 * @swagger
 * /entidad/obtener:
 *   get:
 *     summary: Obtiene todas las entidades
 *     tags: [Entidades]
 *     responses:
 *       200:
 *         description: Lista de entidades
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Entidad'
 *       500:
 *         description: Error interno del servidor
 */

/**
 * @swagger
 * /entidad/crear:
 *   post:
 *     summary: Crea una nueva entidad
 *     tags: [Entidades]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Entidad'
 *     responses:
 *       201:
 *         description: Entidad creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Entidad'
 *       500:
 *         description: Error interno del servidor
 */
