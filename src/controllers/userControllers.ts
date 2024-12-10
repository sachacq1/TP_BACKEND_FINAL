import { Request, Response } from "express"
import { UserData } from "../interfaces/userData"
import userModel from "../models/userModel"

const register = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body
        const newUserBody: UserData = { username, password }

        const newUser = await userModel.register(newUserBody)
        res.json(newUser)
    } catch (error: any) {
        res.status(500).json({ error: error.message })
    }
}

const login = async (req: Request, res: Response) => {

    try {

        const { username, password } = req.body as UserData

        const token = await userModel.login({ username, password })

        res.json({ token })
    } catch (error: any) {
        console.error(error)
        res.status(500).json({ error: error.message })
    }
}

export { register, login }