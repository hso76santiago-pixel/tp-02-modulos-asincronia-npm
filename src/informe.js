function formatearActividad(actividad) {
const entrada = actividad.gratuita ? "Entrada gratuita" : "Entrada arancelada";
return `${actividad.fecha} | ${actividad.nombre} | ${actividad.lugar} | ${entrada} | ${actividad.hora} | ${actividad.asistencia}`;
}
function crearInforme(actividades) {
const lineas = actividades.map(formatearActividad);
return `Cine Teatro Valle Viejo
===============
Cantidad de actividades: ${actividades.length}
${lineas.join("\n")}
`;
}
module.exports = { crearInforme };