"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteEvent = exports.updateEvent = exports.createEvent = exports.getEventById = exports.getAllEvents = void 0;
const eventModel_1 = __importDefault(require("../models/eventModel"));
const getAllEvents = async (req, res) => {
    try {
        const events = await eventModel_1.default.getEvents();
        res.status(200).json(events);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.getAllEvents = getAllEvents;
const getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        const product = await eventModel_1.default.getEventById(id);
        if (!product) {
            res.status(400).json({ status: 400, error: "No se encontro el evento" });
        }
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.getEventById = getEventById;
const createEvent = async (req, res) => {
    const { name, description, date, addres } = req.body;
    const eventBody = { name, description, date, addres };
    try {
        const newEvent = await eventModel_1.default.createEvent(eventBody);
        if (!name || !description || !date || !addres) {
            res.status(400).json({ status: 400, error: "Faltan datos" });
        }
        res.status(201).json(newEvent);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
        console.log(error);
    }
};
exports.createEvent = createEvent;
const updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description, date, addres } = req.body;
        const updateDataEvent = await eventModel_1.default.updateEvent(id, { name, description, date, addres });
        if (!updateDataEvent) {
            res.status(400).json({ status: 400, error: "No se encontro el evento" });
        }
        res.status(200).json(updateDataEvent);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.updateEvent = updateEvent;
const deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedEvent = await eventModel_1.default.deleteEvent(id);
        if (!deletedEvent) {
            res.status(400).json({ status: 400, error: "No se encontro el evento" });
        }
        res.status(200).json(deletedEvent);
    }
    catch (error) {
        res.status(500).json({ status: 500, error: error.message });
    }
};
exports.deleteEvent = deleteEvent;
