// Prueba-Unitaria.js
const jwtManager = require("../Utilidades/Singleton-JWT");

describe("Gestion del JWT", () => {
    test("Generacion de token valido", () => {
        const token = jwtManager.generacionToken({ nombre: "admin", rol: "admin" });
        expect(token).toBeDefined();
    });

    test("Verficacion del token valido", () => {
        const token = jwtManager.generacionToken({ nombre: "admin", rol : "admin" });
        const decoded = jwtManager.verificacionToken(token);
        expect(decoded.nombre).toBe("admin");
    })

    test("Fallo el token valido", () => {
        expect(() => jwtManager.verificacionToken("TOKEN-INVALIDO")).toThrow();
    });
});