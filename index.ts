import express from "express";
import helmet from "helmet";
import { connectDB } from "./src/config/config";
import { eventRouter } from "./src/routes/eventRoute";
import { userRouter } from "./src/routes/userRouter"
import { checkJwtSecret } from "./src/middlewares/envMiddleware"


process.loadEnvFile()

const PORT = process.env.PORT

const app = express();

app.use(express.json());
app.use(helmet())

app.use(checkJwtSecret)

app.use("/api/events", eventRouter)
app.use("/api/users", userRouter)

connectDB()
app.listen(PORT, () => {
    console.log("Conexion exitosa en puerto" + PORT)
})