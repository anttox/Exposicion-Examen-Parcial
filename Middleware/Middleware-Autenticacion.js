// Middleware-Autenticacion.js
const jwtManager = require("../Utilidades/Singleton-JWT");

function verificacionToken(req, res, next) {
    const token = req.headers["authorization"];
    if (!token) {
        return res.status(403).json({ error: "El token no ha sido proporcionado" });
    }

    const tokenParts = token?.split(" ");
    if (tokenParts?.length !== 2 || tokenParts[0] !== "Bearer") {
        return res.status(400).json({ error: "Formato de token incorrecto" });
    }

    try {
        const decoded = jwtManager.verificacionToken(tokenParts[1]);
        req.usuario = decoded;
        next();
    } catch (error) {
        console.error("Error al verificar token:", error.message);
        res.status(401).json({ error: "El token es invalido" });
    }
}

function verificacionRol(rolRequerido) {
    return (req, res, next) => {
        if (req.usuario.rol !== rolRequerido) {
            return res.status(403).json({ error: "Acceso denegado" });
        }
        next();
    };
}

module.exports = { verificacionToken, verificacionRol };
