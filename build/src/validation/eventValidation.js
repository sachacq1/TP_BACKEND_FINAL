"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventValidation = void 0;
const express_validator_1 = require("express-validator");
const eventValidation = () => {
    return [
        (0, express_validator_1.check)("event").notEmpty().withMessage("El nombre del evento es obligatorio"),
        (0, express_validator_1.check)("event").isLength({ min: 3 }).withMessage("El nombre del evento debe tener al menos 3 letras"),
        (0, express_validator_1.check)("event").isLength({ max: 20 }).withMessage("El nombre del evento debe tener menos de 20 letras"),
        (0, express_validator_1.check)("description").notEmpty().withMessage("La descripcion es obligatoria"),
        (0, express_validator_1.check)("description").isLength({ max: 15 }).withMessage("La descripcion debe tener menos de 100 letras"),
        (0, express_validator_1.check)("date").notEmpty().withMessage("La fecha es obligatoria"),
        (0, express_validator_1.check)("addres").notEmpty().withMessage("La direccion es obligatoria"),
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
exports.eventValidation = eventValidation;
