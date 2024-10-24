// index.js
const express = require("express");
const Controller = require("./Controladores/Controlador-Autenticacion");
const { verificacionToken, verificacionRol } = require("./Middleware/Middleware-Autenticacion");

const app = express();
app.use(express.json());

// Ruta raíz para manejar la solicitud a "/"
app.get("/", (req, res) => {
    res.send("Bienvenido al sistema de autenticación");
});

app.post("/registrar", Controller.registrar);
app.post("/login", Controller.login);

app.get("/admin", verificacionToken, verificacionRol("admin"), (req, res) => {
    res.json({ message: `Buen día administrador ${req.usuario.nombre}` });
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
