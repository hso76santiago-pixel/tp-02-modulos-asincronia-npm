# Trabajo práctico 02 
 Módulos: asincronía y NPM
##  Sistema de Gestión de Actividades - Cine Teatro Valle Viejo
Proyecto desarrollado en Node.js para la lectura, procesamiento y generación de informes de actividades a partir de datos en formato JSON de manera asíncrona.
##  Descripción del Proyecto
Este sistema lee un conjunto de datos sobre las actividades programadas en el Cine Teatro Valle Viejo desde un archivo `.json`, procesa la información y genera automáticamente un archivo de texto (`agenda.txt`) con un informe detallado y formateado.
## Tecnologías Utilizadas
Node.js: Entorno de ejecución para JavaScript.
Módulos nativos (`fs`, `path`): Manejo del sistema de archivos y rutas de manera asíncrona.
JSON: Formato para el almacenamiento y estructuración de los datos de las actividades.
## Estructura del Proyecto

tp-02-modulos-asincronia-npm/
├── datos/
│   └── actividades.json
├── node_modules/
├── salida/
│   └── agenda.txt
├── src/
│   ├── archivos.js
│   ├── index.js
│   └── informe.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
## Módulo archivos.js
Este módulo debe ocuparse exclusivamente del acceso al sistema de archivos
## Módulo informe.js
Este módulo debe transformar los datos del dominio y devolver el informe completo como texto
## Módulo index.js
Este módulo debe coordinar la aplicación.
## Diferencia entre exportar y ejecutar una función:
 Exportar una función, significa ponerla a disposición para que otros archivos de la aplicación puedan importarla y usarla. 
 Ejecutar una función, significa invocarla en ese preciso instante para que realice su trabajo y devuelva un resultado
## Qué representa la promesa de fs.readFile: 
 Representa una operación asíncrona en curso para leer un archivo en el disco. Al resolverse, la promesa entrega el contenido del archivo (generalmente como un buffer o texto); si falla (por ejemplo, si el archivo no existe), se rechaza devolviendo el error correspondiente
## Por qué await va dentro de una función async: 
 En JavaScript, await pausa la ejecución dentro del contexto de esa función hasta que una promesa se resuelva o rechace. La palabra clave async habilita este comportamiento asíncrono y le indica al motor de JS que la función devolverá implícitamente una promesa
## Errores que pueden llegar al catch de main: 
 Puede recibir errores de lectura/escritura en disco (archivo .json inexistente, falta de permisos en la carpeta salida), errores de sintaxis al parsear el JSON (JSON.parse con formato inválido), o errores de código (intentar acceder a propiedades de algo que es undefined)
## Por qué no se publica node_modules: 
node_modules contiene miles de archivos pesados que cambian según el sistema operativo.
Se publican package.json (que lista las librerías necesarias) y package-lock.json (que guarda las versiones exactas instaladas) para que cualquier persona pueda recrear la misma carpeta ejecutando simplemente npm install, manteniendo el repositorio liviano
## Uso de picocolors y su presencia en dependencies: 
picocolors se utiliza para darle formato de color a los mensajes impresos en la terminal de la consola. Modifica el texto en tiempo de ejecución de la aplicación, por lo que forma parte del código de producción y debe figurar en dependencies (y no en devDependencies)
## Datos Personales:
alumno: Héctor Santiago Orellana Gonzales
Correo Electrónico: hso76santiago@gmail.com
Teléfono: 3834-801585