const db = require("./db");

async function obtenerInformacionHabitacion() {
  const [rows] = await db.execute(`
        SELECT h.id_habitacion as id, h.descripcion as descripcion_habitacion, a.ref_tipo_acomodacion as tipo_codigo, a.descripcion as tipo_detalle, a.ocupacion_max as ocupacion_max, a.precio_noche, a.capacidad_instalada as capacidad_instalada, a.imagenes, a.activo
        FROM habitaciones h
        join acomodaciones a on a.id_acomodacion = h.id_acomodacion;`);
  return rows;
}

async function crearHabitacion(data) {
  const {
    id_acomodacion,
    numero_habitacion,
    descripcion,
    piso,
    estado,
    caracteristicas,
    activo = true,
  } = data;
  const [result] = await db.execute(
    `INSERT INTO habitaciones (
      id_acomodacion, numero_habitacion, descripcion, piso,
      estado, caracteristicas, activo, fecha_creacion, fecha_actualizacion
    ) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW())`,
    [
      id_acomodacion,
      numero_habitacion,
      descripcion,
      piso,
      estado,
      caracteristicas,
      activo,
    ]
  );

  return result.insertId;
}

module.exports = {
  obtenerInformacionHabitacion,
  crearHabitacion,
};
