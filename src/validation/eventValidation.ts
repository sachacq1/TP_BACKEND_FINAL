import { check, validationResult } from 'express-validator'
import { Request, Response, NextFunction } from 'express'

const eventValidation = () => {
    return [
        check("name").notEmpty().withMessage("El nombre del evento es obligatorio"),
        check("name").isLength({ min: 3 }).withMessage("El nombre del evento debe tener al menos 3 letras"),
        check("name").isLength({ max: 20 }).withMessage("El nombre del evento debe tener menos de 20 letras"),
        check("description").notEmpty().withMessage("La descripcion es obligatoria"),
        check("description").isLength({ max: 50 }).withMessage("La descripcion debe tener menos de 50 letras"),
        check("date").notEmpty().withMessage("La fecha es obligatoria"),
        check("addres").notEmpty().withMessage("La direccion es obligatoria"),


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

export { eventValidation }