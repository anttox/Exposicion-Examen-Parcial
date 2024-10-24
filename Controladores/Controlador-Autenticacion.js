// Controlador-Autenticacion.js
const bcrypt = require("bcryptjs");
const jwtManager = require("../Utilidades/Singleton-JWT")

class Controller {
    constructor() {
        this.usuarios = []; // Inicializamos el array de usuarios
    }

    // Método registrar como función flecha
    registrar = async (req, res) => {
        const { nombre, password, rol } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        this.usuarios.push({ nombre, password: hashedPassword, rol });
        res.status(201).json({ message: "El usuario se ha registrado exitosamente" });
    };

    // Método login como función flecha
    login = async (req, res) => {
        const { nombre, password } = req.body;
        const usuario = this.usuarios.find((u) => u.nombre === nombre);

        if (!usuario || !(await bcrypt.compare(password, usuario.password))) {
            return res.status(401).json({ error: "Las credenciales son inválidas" });
        }

        const token = jwtManager.generacionToken({ nombre: usuario.nombre, rol: usuario.rol });
        res.json({ token });
    };
}

module.exports = new Controller();
