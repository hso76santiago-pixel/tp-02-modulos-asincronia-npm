
const fs = require("node:fs/promises");
const path = require("node:path");

async function leerJson(ruta) {
  const texto = await fs.readFile(ruta, "utf8");
  return JSON.parse(texto);
}

async function escribirJson(ruta, contenido) {
  await fs.mkdir(path.dirname(ruta), { recursive: true });
  await fs.writeFile(ruta, JSON.stringify(contenido, null, 2), "utf8");
}

async function escribirTexto(ruta, contenido) {
  await fs.mkdir(path.dirname(ruta), { recursive: true });
  await fs.writeFile(ruta, contenido, "utf8");
}

module.exports = {
  leerJson,
  escribirJson,
  escribirTexto
}