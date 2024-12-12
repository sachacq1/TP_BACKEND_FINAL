"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkJwtSecret = void 0;
process.loadEnvFile();
const checkJwtSecret = (req, res, next) => {
    try {
        const JWT_SECRET = process.env.JWT_SECRET;
        if (!JWT_SECRET) {
            res.status(400).json({ error: "Necesitas la contraseña jwt" });
            return;
        }
        next();
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.checkJwtSecret = checkJwtSecret;
