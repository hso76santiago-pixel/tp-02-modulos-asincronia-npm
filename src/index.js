const path = require("node:path");
const pc = require("picocolors");
const { leerJson, escribirTexto, } = require("./archivos.js"); 
const { crearInforme } = require("./juegos.js");

const rutaDatos = path.join(__dirname, "..", "datos", "juegos.json");
const rutaSalida = path.join(__dirname, "..", "salida", "catalogo-juegos.txt");

// Para manejar el async necesito crear una funcion main y dentro de ella poner el try catch para manejar los errores
async function main() {
  try {
    console.log(pc.cyan("Leyendo juegos de Mesa..."));
    const juegos = await leerJson(rutaDatos);
    
    const informe = crearInforme(juegos);
    await escribirTexto(rutaSalida, informe); // Guarda el contenido del informe en el archivo de salida
    
    console.log(juegos);
    console.log(pc.green(`Catalogo de juegos generado en: ${rutaSalida}`));
    
  } catch (error) {
    console.error(pc.red(`No se pudo generar el catalogo: ${error.message}`));
    process.exitCode = 1;
  }
}

main();