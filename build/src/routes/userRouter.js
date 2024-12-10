"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const userControllers_1 = require("../controllers/userControllers");
const userRouter = (0, express_1.Router)();
exports.userRouter = userRouter;
userRouter.post("/register", userControllers_1.register);
userRouter.post("/login", userControllers_1.login);
