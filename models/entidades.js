const db = require("../models/db");

async function obtenerInformacionEntidades() {
  const [rows] = await db.execute(`SELECT * FROM config;`);
  return rows;
}

async function crearEntidad(data) {
  const { entidad, codigo, detalle } = data;

  const [result] = await db.execute(
    `INSERT INTO config (entidad, codigo, detalle) VALUES (?, ?, ?)`,
    [entidad, codigo, detalle]
  );

  return result.insertId;
}

module.exports = {
  obtenerInformacionEntidades,
  crearEntidad,
};
