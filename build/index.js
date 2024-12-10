"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const config_1 = require("./src/config/config");
const productRoute_1 = require("./src/routes/productRoute");
const userRouter_1 = require("./src/routes/userRouter");
process.loadEnvFile();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/api/products", productRoute_1.productRouter);
app.use("/api/users", userRouter_1.userRouter);
(0, config_1.connectDB)();
app.listen(PORT, () => {
    console.log("Conexion exitosa en puerto" + PORT);
});
