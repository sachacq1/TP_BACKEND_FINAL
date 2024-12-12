"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventRouter = void 0;
const express_1 = require("express");
const eventControllers_1 = require("../controllers/eventControllers");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const eventValidation_1 = require("../validation/eventValidation");
const eventRouter = (0, express_1.Router)();
exports.eventRouter = eventRouter;
eventRouter.use(authMiddleware_1.authMiddleware);
eventRouter.get("/", eventControllers_1.getAllEvents);
eventRouter.get("/:id", eventControllers_1.getEventById);
eventRouter.post("/", (0, eventValidation_1.eventValidation)(), eventControllers_1.createEvent);
eventRouter.patch("/:id", eventControllers_1.updateEvent);
eventRouter.delete("/:id", eventControllers_1.deleteEvent);
