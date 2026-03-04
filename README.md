# API-CRUD

_Este proyecto consiste en el desarrollo de un Backend completo utilizando el stack tecnológico MEAN (MongoDB, Express, Angular, Node.js). El objetivo principal es crear una API RESTful que permita realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) sobre una base de datos MongoDB._

_En el caso de ser un API, se muestra a continuación un ejemplo de tabla con las posibles rutas (**endpoints**) del API (el tema de los colores es bastante novedoso y en mucho visores serán ignorados):_

Verbo HTTP | Ruta | Descripción
--------: | :------- | :--------
<span style="color:green">GET</span> | /api | Obtenemos todas las colecciones existentes en la DB.
<span style="color:green">GET</span> | /api/\{coleccion\} | Obtenemos todos los elementos de la tabla \{coleccion\}.
<span style="color:green">GET</span> | /api/\{coleccion\}/\{id\} | Obtenemos el elemento indicado en \{id\} de la tabla \{coleccion\}.
<span style="color:yellow">POST</span> | /api/\{coleccion\} | Creamos un nuevo elemento en la tabla \{coleccion\}.
<span style="color:blue">PUT</span> | /api/\{coleccion\}/\{id\} | Modificamos el elemento \{id\} de la tabla \{coleccion\}.
<span style="color:red">DELETE</span> | /api/\{coleccion\}/\{id\} | Eliminamos el elemento \{id\} de la tabla \{coleccion\}.

## Comenzando 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

Ver **Deployment** para conocer cómo desplegar el proyecto.

### Pre-requisitos 📋

_Se debe tener instalado **Node JS** en el equipo de desarrollo. Las siguientes líneas muestran cómo hacerlo con líneas de comando (por eso escribiremos sh tras las tre comiilas invertidas) para **Ubuntu 22.04**:_

```sh
sudo apt update
sudo apt install npm
sudo npm clean -f
sudo npm i -g n
sudo n stable
```

_Igualmente se debe tener instalada la DB **MongoDB** y asegurarnos que está lanzada..._

```sh
sudo apt update
sudo apt install -y mongodb
sudo systemctl start mongodb
```

### Instalación 🔧

_En esta sección veremos cómo instalar y configurar el entorno de desarrollo para trabajar con el proyecto._

_En primer lugar, debemos clonar el proyecto desde nuestro repositorio._

```sh
git clone https://pmacia@bitbucket.org/pmacia/api-rest.git
```

_Una vez clonado el respositorio, debemos instalar y actualizar todas las bibliotecas de código y dependencias del proyecto._

```sh
cd api-rest
npm i
```

_Para poner el proyecto en marcha, ejecutaremos el siguiente comando:_

```sh
npm start
```

## Pruebas con Postman 📯

_El archivo `CRUD_postman_collection.json` contiene una colección de pruebas para todos los **endpoints** del API del servicio._

_Para poder emplearlo desde **Postman**, bastará con importar el archivo y, si fuera necesario, modificar el puerto de escucha del servidor._

<!-- ## Ejecutando las pruebas ⚙️

_Explica cómo ejecutar las pruebas automatizadas para este sistema._

### Analice las pruebas end-to-end 🔩

_Explica qué verifican estas pruebas y por qué_

```
Proporciona un ejemplo
```

### Y las pruebas de estilo de codificación ⌨️

_Explica qué verifican estas pruebas y por qué_

```
Proporciona un ejemplo
``` -->

## Despliegue 📦

_Agrega notas adicionales sobre cómo hacer deploy._

## Construido con 🛠️

* [Express](https://expressjs.com/es/) - Infraestructura de aplicaciones web Node.js mÃ­nima y flexible que proporciona un conjunto sólido de caracterí­sticas para las aplicaciones web y móviles.
* [mongodb](https://www.mongodb.com/docs/drivers/node/current/) - official MongoDB Node.js driver. You can add the driver to your application to work with MongoDB in JavaScript.
* [mongojs](github.com/mongo-js/mongojs#readme) - Iofficial MongoDB Node.js driver. You can add the driver to your application to work with MongoDB in JavaScript.
* [cors](github.com/expressjs/cors#readme) - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* [helmet](helmetjs.github.io/) - IHelmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
* [morgan](github.com/expressjs/morgan#readme) - HTTP request logger middleware for node.js.
* [nodemon](https://www.npmjs.com/package/nodemon) - Herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.
* [jwt-simple](https://github.com/hokaccha/node-jwt-simple#readme) - JWT(JSON Web Token) encode and decode module for node.js.
* [moment](https://momentjs.com) - A JavaScript date library for parsing, validating, manipulating, and formatting dates.

<!-- ## Contribuyendo 🖇️

Por favor lee el [CONTRIBUTING.md](https://gist.github.com/tu/tuProyecto) para detalles de nuestro código de conducta, y el proceso para enviarnos pull requests.

## Wiki 📖

Puedes encontrar mucho más de cómo utilizar este proyecto en nuestra [Wiki](https://github.com/tu/proyecto/wiki) -->

## Versionado 📌

Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](https://https://bitbucket.org/pmacia/api-rest/commits/).

En este respositorio se pueden encontrar la evolución del proyecto desde la estructura básica de un servicio, hasta un servicio CRUD completo con comunicación HTTPS, soporte para CORS, seguridad con Helmet y autorización tipo bearer basada en tokens tipo JWT:

tag     | Descripción
------- | ------------------------------------------
v1.0.25 | API Rest Hola Mundo.
v2.0.0  | API Rest CRUD (sin DB).
v3.0.0  | API Rest CRUD (con DB MongoDB).
v3.1.0  | API Rest CRUD con seguridad.
v3.2.0  | API Rest CRUD con seguridad y auth basado en Bearer JWT.

## Autores ✒️

_Todos aquellos que ayudaron a levantar el proyecto desde sus inicios:_

* **Paco Maciá** - _Trabajo Inicial_ - [pmacia](https://github.com/pmacia)
* **Álvaro Márquez Sirvent** - _Documentación y desarrollo_ - [ams](#fulanito-de-tal)

También puedes mirar la lista de todos los [contribuyentes](https://github.com/your/project/contributors) quiénes han participado en este proyecto.

## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
* Da las gracias públicamente 🤓.
* etc.
