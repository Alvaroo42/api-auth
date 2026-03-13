# API-CRUD + TALLER_CRYPT + API-AUTH

*Descripción (en cursiva) del proyecto, aplicación o sistema. Todo lo que hay en este documento se debe tomar como plantilla de ejemplo, por lo que no se debe dudar en añadir, quitar o modificar lo que se estime oportuno.*

En el caso de ser un API, se muestra a continuación un ejemplo de tabla con las posibles rutas (**endpoints**) del API (el tema de los colores es bastante novedoso y en mucho visores serán ignorados):

| Verbo HTTP | Ruta | Descripción |
| :--- | :--- | :--- |
| GET | `/api/user` | Obtenemos todos los usuarios registrados en el sistema. |
| GET | `/api/user/{id}` | Obtenemos el usuario indicado por el `{id}`. |
| POST | `/api/user` | Registramos un nuevo usuario con toda su información. |
| PUT | `/api/user/{id}` | Modificamos el usuario `{id}`. |
| DELETE | `/api/user/{id}` | Eliminamos el usuario `{id}`. |

| Verbo HTTP | Ruta | Descripción |
| :--- | :--- | :--- |
| GET | `/api/auth` | Obtenemos todos los usuarios registrados en el sistema (es una versión reducida de GET /api/user en la que solo mostramos nombre y correo). |
| GET | `/api/auth/me` | Verifica el token jwt. Obtenemos el usuario a partir de un token jwt válido. |
| POST | `/api/auth/login` | Realiza una identificación o login (signIn). Si todo es correcto, genera y devuelve un token jwt válido. |
| POST | `/api/auth/reg` | Realiza un registro mínimo (signUp) de un usuario. Si todo va bien, genera y devuelve un token jwt válido. |

## Despliegue 📦
Agrega notas adicionales sobre cómo hacer deploy.

## Construido con 🛠️
* **Express** - Infraestructura de aplicaciones web Node.js mínima y flexible que proporciona un conjunto sólido de características para las aplicaciones web y móviles.
* **mongodb** - official MongoDB Node.js driver. You can add the driver to your application to work with MongoDB in JavaScript.
* **mongojs** - official MongoDB Node.js driver. You can add the driver to your application to work with MongoDB in JavaScript.
* **cors** - CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
* **morgan** - HTTP request logger middleware for node.js.
* **nodemon** - Herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación de node cuando se detectan cambios de archivos en el directorio.
* **https** - Módulo nativo de Node.js que permite crear servidores HTTPS seguros utilizando certificados SSL/TLS. Se usa para cifrar la comunicación entre el servidor y los clientes, protegiendo los datos en tránsito.
* **helmet** - Middleware de seguridad para Express que ayuda a proteger las aplicaciones web configurando de manera automática varios encabezados HTTP de seguridad.
* **jwt-simple** - JWT(JSON Web Token) encode and decode module for node.js.
* **moment** - A JavaScript date library for parsing, validating, manipulating, and formatting dates.
* **bcrypt** - Algoritmo de hashing de contraseñas poderoso diseñado específicamente para mejorar la seguridad del almacenamiento de contraseñas en un sistema.

## Versionado 📌
Usamos [SemVer](http://semver.org/) para el versionado. Para todas las versiones disponibles, mira los [tags en este repositorio](#).

En este repositorio se pueden encontrar la evolución del proyecto desde la estructura básica de un servicio, hasta un servicio con comunicación HTTPS, soporte para CORS, seguridad y autorización tipo bearer basada en tokens tipo JWT:

| tag / commit | Descripción |
| :--- | :--- |
| v1.0.0 | WS de Registro (API base de usuarios con validación inicial). |
| commit | WS de Registro con autorización Bearer JWT. |
| v1.1.0 | WS Auth completo (API protegida con JWT y rutas `/api/auth` finales). |

## Autores ✒️

*Todos aquellos que ayudaron a levantar el proyecto desde sus inicios:*

* **Paco Maciá** - *Trabajo Inicial* - [pmacia](#)
* **Álvaro Márquez Sirvent** - *Documentación y desarrollo* - [ams](#)


## Licencia 📄

Este proyecto está bajo la Licencia (Tu Licencia) - mira el archivo [LICENSE.md](#) para detalles

## Expresiones de Gratitud 🎁

* Comenta a otros sobre este proyecto 📢
* Invita una cerveza 🍺 o un café ☕ a alguien del equipo.
* Da las gracias públicamente 🤓.
* etc.