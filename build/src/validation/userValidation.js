"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidation = void 0;
const express_validator_1 = require("express-validator");
const userValidation = () => {
    return [
        (0, express_validator_1.check)("username").notEmpty().withMessage("El nombre del evento es obligatorio"),
        (0, express_validator_1.check)("username").isLength({ min: 3 }).withMessage("El nombre del evento debe tener al menos 3 letras"),
        (0, express_validator_1.check)("username").isLength({ max: 20 }).withMessage("El nombre del evento debe tener menos de 20 letras"),
        (0, express_validator_1.check)("password").notEmpty().withMessage("La contraseña es obligatoria"),
        (0, express_validator_1.check)("password").isLength({ min: 4 }).withMessage("La contraseña debe tener al menos de 4 caracteres"),
        (req, res, next) => {
            const errors = (0, express_validator_1.validationResult)(req);
            if (!errors.isEmpty()) {
                const checkError = errors.array().map(error => error.msg);
                res.status(400).json({
                    status: 400,
                    error: checkError
                });
                return;
            }
            next();
        }
    ];
};
exports.userValidation = userValidation;
