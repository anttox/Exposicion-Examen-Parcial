const jwt = require("jsonwebtoken");

class JWTManager {
    static instance;

    constructor() {
        if (JWTManager.instance) {
            return JWTManager.instance;
        }
        JWTManager.instance = this;
    }

    generacionToken(payload) {
        return jwt.sign(payload, "secreto", { expiresIn: "1h" });
    }
    
    verificacionToken(token) {
        
        try {
            return jwt.verify(token, "secreto");
        } catch (erorr) {
            throw new Error("El token es invalido o ha expirado");
        }
    }
}

module.exports = new JWTManager();