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

![imagen](https://github.com/user-attachments/assets/7a3671bc-b626-4231-9a5e-7a0ee3d1f37a)

## 2.2 Patrón de Diseño Facade
Facade es un patrón de diseño estrcutural, es dcir que nos va a proporcionar una interfaz simplificada o un punto de entrada único para acceder a varias funcionalidades complejas de un sistema, esto podemos visualizarlo en mi archivo Controlador-Autenticacion.js donde agrupo diferentes funcionalidades, como el registro y el login. En lugar de tener estas operaciones dispersas por toda la aplicación, las encapsulé dentrod el controlador, y de esta manera el controlador actúa como un punto de entrada simplificado para todas las acciones relacionadas con la autenticación. Como ejemplo tenemos a mi API principal index.js donde simplemente llamamos al controlador para realizar las operaciones necesarios, sin preocuparnos por los detalles internos como el hashing o el manejo de los JWT.

![imagen](https://github.com/user-attachments/assets/b8f43ecf-852d-4f64-a813-f38b40ed8e75)

## 2.3 Control de Acceso Basado en Roles (RBAC)
El acceso a rutas protegidas protegidas estará delimitada según el rol del usuario, por eso creamos el Middleware que nos permitirá verficar el token y el rol del usuario.

![imagen](https://github.com/user-attachments/assets/19cc4c09-d111-44e3-a585-9df4ad59d4bb)

# 3. Pruebas Unitarias
Realizamos pruebas unitarias en Jest para validar el correcto funcionamiento del sistema, por eso gracias a Jest podemos hacer pruebas de generación de tokes y validación de tokens JWT.

![imagen](https://github.com/user-attachments/assets/36e9df90-ded6-4c62-b564-362eac9d70e8)

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
En nuestro proyecto hemos implementado Jest en el archivo Prueba-Unitaria.js para validar que los tokens se generen correctamente y se lancen errores si el token es inválido. El porque es muy simple, Jest al ser uin marco de pruebas de Javascript nos permite escribir y ejecutar pruebas unitarias para que se valide cada parte del sistema. Recordar que Jest por defecto cuando hace una busqueda de pruebas unitarias en los archivos, estos deben estar nombrados uusando .test.js o .spec.js.

![imagen](https://github.com/user-attachments/assets/55157f64-efee-4948-abfe-812ddd64e623)

*Instalación*
```bash
npm install --save-dev jest
```
*Ejecución de pruebas unitarias*
```bash
npm test
```
![imagen](https://github.com/user-attachments/assets/46a695c1-779f-44fe-a920-be4c90a380bd)

# 5. Manejo de errores (Pruebas de Seguridad)
En esta parte explicaremos cómo el sistema maneja los errores más comunes para evitar vulnerabilidades
## 5.1 Falta de token
El middleware verificacionToken devolvera un error 403 Forbidden si no se proporciona un token.

![imagen](https://github.com/user-attachments/assets/04f37846-7929-4b76-9918-b20b25d25165)

## 5.2 Formato incorrecto del token
Si existe el caso de que el token no sigue el formato Bearer "token", se retornará un error 400 Bad Request.

![imagen](https://github.com/user-attachments/assets/30c9a6ed-0656-4ea2-b22f-bdf91a981de2)

## 5.3 Token manipulado o expirado
Si el token es manipulado o ha expirado, la función verificacionToken lanzará un error 401 Unauthorized.

![imagen](https://github.com/user-attachments/assets/1893ee84-0149-4c5e-bec3-8d96afdfc140)

## 5.4 Acceso denegado por el rol del usuario (RBAC)
Validaremos que el rol del usuario coincida con el requerido (admin). Si no coincide, se retornará el error 403 Forbidden.

![imagen](https://github.com/user-attachments/assets/9528d8b5-a71a-4989-94e2-53aeb19c0484)

## 5.5 Hashing 
Usamos bcrypt para poder almacenar las contraseñas de manera segura, gracias a esto podremos protegernos contra ataques de fuerza bruta.

![imagen](https://github.com/user-attachments/assets/b0f70bd5-01af-459f-9457-a15e70e2bbe3)

# 6. Ejecución del proyecto
**Iniciamos el servidor**

![imagen](https://github.com/user-attachments/assets/c231ce20-6bd8-4029-a7e4-62e97e15d916)

**Usamos Postman para las rutas principales**

*Registro*

![imagen](https://github.com/user-attachments/assets/14239187-0ac4-4dcd-a34b-42725fa32cd9)

*Login*

![imagen](https://github.com/user-attachments/assets/4d2ff340-6112-4216-8423-83e01234c53b)

*Resultado*

![imagen](https://github.com/user-attachments/assets/fdc0e850-91e9-423b-9f0f-977980d73d56)

