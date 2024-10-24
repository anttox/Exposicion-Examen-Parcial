# Proyecto 4: Diseño y desarrollo de un módulo de autenticación y autorización 
Se nos pide implementar un sistema completo de autenticación y autorización para una aplicación web. Para la realización de este proyecto usaremos JWT (JSON Web Tokens) para la gestión de sesiones de usuarios y aplicaremos control de acceso basado en roles (RBAC) para poder definir permisos específicos. También hemos aplicado patrones de diseño como Singleton y Facade para mantener el proyecto con una correcta estructura. Estos son los principales requisitos que se pide en la rúbrica del proyecto, mas adelante mencionaremos las guías de integración, las pruebas de seguridad y las pruebas unitarias.

# 1. Estructura del proyecto
Estructura modular de la organización del proyecto

```bash
PROYECTO-AUTORIZACIÓN
|
├── Controladores
|   └── Controlador-Autenticación.js // Gestor de usuarios y login
├── Middleware
|   └── Middleware-Autenticación.js // Validación de tokens y roles
├── Tests
|   └── Prueba-Unitaria.test.js // Prueba unitario usando Jest
├── Utilidades
|   └── Singleton-JWS.js // Generación y verificación de los Jason Web Tokens
├── index.js // Punto de entrada de la aplicación
├── package.json // Dependencias y configuración del proyecto
├── package-lock.json
```

# 2. Implementación de Autenticación y Autorización
En nuestro proyecto como ya hemos mencionado hacemos uso de JWT para la gestión de sesiones, donde canda usuario al identificarse recibe un token JWT que le sirve para acceder a recursos protegidos. Además, hemos implementado un control de acceso basado en roles (RBAC) para limitar a los usuarios el acceso a ciertas rutas.
## 2.1 Uso de JWT para Sesiones (Singleton)
Hemos implementado un patrón de diseño denominado Singleton que nos garantiza que solo exista una isntancia del JWT Manager en toda la aplicación, evitando problemas de múltiples instancias y garantizando un manejo seguro de los tokens.
## 2.2 Control de Acceso Basado en Roles (RBAC)
El acceso a rutas protegidas protegidas estará delimitada según el rol del usuario, por eso creamos el Middleware que nos permitirá verficar el token y el rol del usuario.

# 3. Pruebas Unitarias
Realizamos pruebas unitarias en Jest para validar el correcto funcionamiento del sistema, por elo gracias a Jest podemos hacer pruebas de generación de tokes y validación de tokens JWT.

# 4. Guía de Integración 
Para la correcta ejecución de este proyecto, hemos usado herramientas del curso como Node.js y Express, ademas del plus como JWT, ya que nos permite instalar dependencias importantes para su correcta ejecución que en el trasncuro del documento explicaremos la importancia de las librerías utilizadas, así como los comandos para instalarlos.
## 4.1 Express
En nuestro proyecto hemos usado Express para poder definir rutas principales como /loginb y /amind, de esta forma podremos gestionar las peticiones HTTP de manera eficiente.
```bash
npm install express
```
## 4.2 bcryptjs
Bcryptjs nos permite encriptar contraseñas antes de almacenarlo en el sistema. Esto es muy importante para asegurarnos de que las contraseñas no se guarden en texto plano y proteger la aplicación de ataques de fuerza bruta o filtraciones de datos. Ademmás en nuestro proyecto utilizamos bcrypt para poder hacer comparaciones de contraseñas en texto plano que se ingresan durante el login con las contraseñas encriptadas y almacenas en la base de datos.
```bash
npm install bcryptjs
```
## 4.3 JSON Web Tokens (JWT)
Utilizamos JWT para realizar la autenticacion basada en tokens, ya que permite a los usuarios iniciar sesion y que puedan recibir un token que valida su identidad en futuras peticiones, de esta manera JWT garantiza la integridad del usuario durante una sesión sin necesidad de almacenar datos sensibles edl lado del servidor.
```bash
npm install jsonwebtoken
```
## 4.4 Jest
En nuestro proyecto hemos implementado Jest en el archivo Prueba-Unitaria.js para validar que los tokens se generen correctamente y se lancen errores si el token es inválido. El porque es muy simple, Jest al ser uin marco de pruebas de Javascript nos permite escribir y ejecutar pruebas unitarias para que se valide cada parte del sistema. 
*Instalación*
```bash
npm install --save-dev jest
```
*Ejecución de pruebas unitarias*
```bash
npm test
```

