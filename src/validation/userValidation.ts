import { check, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

const userValidation = () => {
    return [
        check("username").notEmpty().withMessage("El nombre del evento es obligatorio"),
        check("username").isLength({ min: 3 }).withMessage("El nombre del evento debe tener al menos 3 letras"),
        check("username").isLength({ max: 20 }).withMessage("El nombre del evento debe tener menos de 20 letras"),
        check("password").notEmpty().withMessage("La contraseña es obligatoria"),
        check("password").isLength({ min: 4 }).withMessage("La contraseña debe tener al menos de 4 caracteres"),



        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {
                const checkError = errors.array().map(error => error.msg)

                res.status(400).json({
                    status: 400,
                    error: checkError
                })
                return
            }
            next()
        }
    ]
}

export { userValidation }