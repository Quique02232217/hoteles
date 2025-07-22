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

module.exports = {
  crearAcomodacion,
};
