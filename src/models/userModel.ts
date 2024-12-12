import { Request, Response } from "express"
import mongoose from "mongoose"
import { UserData } from "../interfaces/userData"
import jwt from "jsonwebtoken"
import bcryptjs from "bcryptjs"

process.loadEnvFile();

const JWT_SECRET = process.env.JWT_SECRET || ""
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { versionKey: false })


const User = mongoose.model("users", userSchema)

const register = async (data: UserData) => {
    try {
        const existingUser = await User.findOne({ username: data.username });
        if (existingUser) {
            return null;
        }
        const hashPass = await bcryptjs.hash(data.password, 10)
        const newUser = new User({ username: data.username, password: hashPass })
        await newUser.save()
        return newUser

    } catch (error) {
        throw new Error("Error al registrar usuario")

    }
}
const login = async (data: UserData): Promise<string> => {
    try {
        const user = await User.findOne({ username: data.username });

        if (!user) {
            throw new Error("El usuario no existe");
        }

        const passwordMatch = await bcryptjs.compare(data.password, user.password);

        if (!passwordMatch) {
            throw new Error("La contraseña es incorrecta");
        }

        const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

        return token;

    } catch (error: any) {
        throw new Error(`Error al iniciar sesión: ${error.message}`);
    }
};

export default { login, register }