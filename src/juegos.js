function formatearJuego(juego){

const estado= juego.disponibles?"Disponible": " No disponoble";
const categorias= juego.categorias.join(",");

return `${juego.titulo} (${juego.anio}) | Editorial: ${juego.editorial} | Jugadores: ${juego.jugadoresMin}-${juego.jugadoresMax} | Categorías: ${categorias} | Estado: ${estado}`;
}


function crearInforme(juego) {
const lineas = juego.map(formatearJuego);
return `Catalogos de los Juegos de Mesa
=======================================
Cantidad de juego: ${juego.length}

${lineas.join("\n")}
`;
}
module.exports = { crearInforme };
