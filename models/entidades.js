const db = require("../models/db");


async function obtenerInformacionEntidades(){
    const [rows] = await db.execute(`SELECT * FROM config;`);
    return rows;
}



module.exports = {
    obtenerInformacionEntidades
}