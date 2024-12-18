"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
process.loadEnvFile();
const JWT_SECRET = process.env.JWT_SECRET || "";
const userSchema = new mongoose_1.default.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true }
}, { versionKey: false });
const User = mongoose_1.default.model("users", userSchema);
const register = async (data) => {
    try {
        const existingUser = await User.findOne({ username: data.username });
        if (existingUser) {
            return null;
        }
        const hashPass = await bcryptjs_1.default.hash(data.password, 10);
        const newUser = new User({ username: data.username, password: hashPass });
        await newUser.save();
        return newUser;
    }
    catch (error) {
        throw new Error("Error al registrar usuario");
    }
};
const login = async (data) => {
    try {
        const user = await User.findOne({ username: data.username });
        if (!user) {
            throw new Error("El usuario no existe");
        }
        const passwordMatch = await bcryptjs_1.default.compare(data.password, user.password);
        if (!passwordMatch) {
            throw new Error("La contraseña es incorrecta");
        }
        const token = jsonwebtoken_1.default.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });
        return token;
    }
    catch (error) {
        throw new Error(`Error al iniciar sesión: ${error.message}`);
    }
};
exports.default = { login, register };
