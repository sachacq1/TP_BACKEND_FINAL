"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const userModel_1 = __importDefault(require("../models/userModel"));
const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        const newUserBody = { username, password };
        const newUser = await userModel_1.default.register(newUserBody);
        res.json(newUser);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const token = await userModel_1.default.login({ username, password });
        res.json({ token });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};
exports.login = login;
