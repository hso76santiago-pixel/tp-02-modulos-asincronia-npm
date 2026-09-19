# Trabajo práctico 02 - Catálogo de Juegos de Mesa

## Descripción
Aplicación de consola desarrollada en Node.js que lee un catálogo de juegos de mesa desde un archivo JSON, procesa y trasforma sus registros, y genera un informe en formato de texto plano de manera asíncrona.

## Instalación
npm install
npm start
npm install picocolors
## Configurar al menos estos scripts:
"type": "commonjs",
"scripts": {
"start": "node src/index.js",
"check": "node --check src/index.js && node --check src/archivos.js && node --check src/juegos.js"
}
## Estructura 
tp-02-modulos-asincronia-npm/
|-- datos/
| `-- juegos.json
|-- src/
| |-- archivos.js
| |-- juegos.js
| `-- index.js
|-- salida/
| `-- catalogo-juegos.txt
|-- .gitignore
|-- package.json
|-- package-lock.json
`-- README.md

## ¿Qué diferencia existe entre exportar una función y ejecutarla?
Exportar una función significa: ponerla a disposición de otros módulos o archivos dentro de tu proyecto. No hace correr el código interno de la función en ese momento; solo la "publica" o la "comparte" para que otro archivo pueda importarla y usarla.

Ejecutar una función (o invocarla): significa indicarle al programa que corra las instrucciones escritas dentro de ella en ese preciso punto de la ejecución.
## La promesa devuelta por fs.readFile (al usar la versión con promesas de Node.js, como fs.promises.readFile o import fs from 'fs/promises'):
Representa la operación asíncrona de lectura de un archivo en el sistema de archivos.

Representa una garantía futura de que el archivo se leerá sin bloquear la ejecución del resto del programa, y cambiará de estado según el resultado.
## ¿Por qué await se utiliza dentro de una función async ?:

await se utiliza dentro de una función async por dos razones fundamentales: el diseño del motor de JavaScript para no bloquear el programa y la necesidad de tener una sintaxis limpia para manejar operaciones asíncronas.
## Al bloque catch de la función main (o del punto de entrada de tu aplicación) llegarán todos los errores no capturados que ocurran durante la cadena de ejecución asíncrona de las funciones que main ejecute.

Si un error ocurre en una función profunda de tu código y ninguna función intermedia lo envuelve en su propio try/catch, este irá "subiendo" en la pila de llamadas (stack trace) hasta ser atrapado por el catch final de main.

## ¿Por qué se publican package.json y package-lock.json , pero no node_modules ?
En términos sencillos: package.json y package-lock.json son las instrucciones de la receta, mientras que node_modules es el platillo ya cocinado. Solo necesitas compartir las instrucciones para que cualquiera pueda cocinar exactamente lo mismo.

node_modules es gigante y pesado
Las dependencias modernas pueden incluir decenas de miles de archivos pequeños que suman cientos de megabytes (o gigabytes).

Git ineficiente: Subir o clonar un repositorio con node_modules llevaría minutos u horas.

Espacio consumido: Servidores de Git como GitHub o GitLab colapsarían o te cobrarían extra por almacenamiento innecesario.

Dependencia de la plataforma (Binarios compilados)
Muchas librerías contienen código nativo en C o C++ que se compila al momento de la instalación para el sistema operativo donde corre (node-gyp).

Si se sube un node_modules instalado en macOS o Windows e intentas ejecutarlo directamente en un servidor de despliegue con Linux, la aplicación fallará porque los binarios no son compatibles.

Al no incluir node_modules, obligas a que cada entorno construya sus dependencias para su propio sistema operativo.

Redundancia
Los paquetes que descargas ya están almacenados y optimizados en un registro público y global (el registro oficial de NPM). No tiene sentido duplicar millones de copias de la misma librería en cada repositorio personal cuando puedes descargarla directamente de la fuente oficial en segundos.

## ¿Para qué se utiliza picocolors y por qué figura en dependencies ?

# picocolors es una librería de JavaScript extremadamente ligera y rápida que se utiliza para dar formato y color al texto en la terminal/consola (usando códigos de escape ANSI).

Se usa principalmente en herramientas de línea de comandos (CLI) o scripts de compilación para mostrar información de forma visualmente clara: resaltando errores en rojo, advertencias en amarillo o estados de éxito en verde.

JavaScript