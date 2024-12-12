"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const config_1 = require("./src/config/config");
const eventRoute_1 = require("./src/routes/eventRoute");
const userRouter_1 = require("./src/routes/userRouter");
const envMiddleware_1 = require("./src/middlewares/envMiddleware");
process.loadEnvFile();
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(envMiddleware_1.checkJwtSecret);
app.use("/api/events", eventRoute_1.eventRouter);
app.use("/api/users", userRouter_1.userRouter);
(0, config_1.connectDB)();
app.listen(PORT, () => {
    console.log("Conexion exitosa en puerto" + PORT);
});
