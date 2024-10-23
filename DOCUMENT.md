# Proyecto 4: Diseño y desarrollo de un módulo de autenticación y autorización 
Se nos pide implementar un sistema completo de autenticación y autorización para una aplicación web. Para la realización de este proyecto usaremos JWT (JSON Web Tokens) para la gestión de sesiones de usuarios y aplicaremos control de acceso basado en roles (RBAC) para poder definir permisos específicos. También hemos aplicado patrones de diseño como Singleton y Facade para mantener el proyecto con una correcta estructura. Estos son los principales requisitos que se pide en la rúbrica del proyecto, mas adelante mencionaremos las guías de integración, las pruebas de seguridad y las pruebas unitarias.

# 1. Estructura del proyecto

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
