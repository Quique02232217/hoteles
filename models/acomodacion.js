const db = require("../models/db");

async function crearAcomodacion(data) {
  const {
    ref_tipo_acomodacion,
    descripcion,
    ocupacion_max,
    precio_noche,
    imagenes,
    capacidad_instalada,
    activo = true,
  } = data;

  const [result] = await db.execute(
    `INSERT INTO acomodaciones (
      ref_tipo_acomodacion, descripcion, ocupacion_max, precio_noche,
      imagenes, capacidad_instalada, activo, fecha_creacion, fecha_actualizacion
    ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
    [
      ref_tipo_acomodacion,
      descripcion,
      ocupacion_max,
      precio_noche,
      imagenes,
      capacidad_instalada,
      activo,
    ]
  );

  return result.insertId;
}

async function obtenerAcomodacion() {
  const [rows] = await db.execute(`SELECT * FROM acomodaciones`);
  return rows;
}

async function obtenerAcomodacionPorReferencia(ref_tipo_acomodacion) {
  const [rows] = await db.execute(
    `SELECT * FROM acomodaciones WHERE ref_tipo_acomodacion = ?`,
    [ref_tipo_acomodacion]
  );
  return rows;
}

module.exports = {
  crearAcomodacion,
  obtenerAcomodacion,
  obtenerAcomodacionPorReferencia,
};
