import { Router } from "express"
import { login, register } from "../controllers/userControllers"
import { userValidation } from "../validation/userValidation"

const userRouter = Router()

userRouter.post("/register", userValidation(), register)
userRouter.post("/login", login)

export { userRouter }