"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
process.loadEnvFile();
const URI_DB = process.env.URI_DB || "";
const connectDB = async () => {
    try {
        await mongoose_1.default.connect(URI_DB);
        console.log("Conexion a la base de datos exitosa");
    }
    catch (error) {
        console.log("Error al conectar a la base de datos", error);
    }
};
exports.connectDB = connectDB;
