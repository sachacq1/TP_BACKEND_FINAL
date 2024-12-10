import { Router } from "express";
import { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent } from "../controllers/eventControllers";
import { authMiddleware } from "../middlewares/authMiddleware";

const eventRouter = Router()


eventRouter.use(authMiddleware)

eventRouter.get("/", getAllEvents)
eventRouter.get("/:id", getEventById)
eventRouter.post("/", createEvent)
eventRouter.patch("/:id", updateEvent)
eventRouter.delete("/:id", deleteEvent)

export { eventRouter }