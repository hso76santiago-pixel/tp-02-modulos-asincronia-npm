const fs = require("node:fs/promises");
const path = require("node:path");
async function leerJson(ruta) {
  const texto = await fs.readFile(ruta, "utf8");
  return JSON.parse(texto);
}
async function escribirTexto(ruta, contenido) {
  await fs.mkdir(path.dirname(ruta), { recursive: true });
  await fs.writeFile(ruta, contenido, "utf8");
}
//Con mode.exports exporto la funcion leerJson y escribirTexto para que puedan ser utilizadas en otros archivos//
module.exports = {
  leerJson,
  escribirTexto,
};
