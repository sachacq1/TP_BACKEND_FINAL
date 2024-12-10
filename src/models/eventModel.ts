import mongoose from "mongoose"
import { EventBody } from "../interfaces/eventInterface";

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    addres: {
        type: String,
        required: true,
    },
}, {
    versionKey: false
});

const Event = mongoose.model("events", eventSchema)

const getEvents = async () => {
    try {
        const events = await Event.find()
        return events
    } catch (error) {
        throw new Error("Error al obtener los eventos")
    }
};
const createEvent = async (dataEvent: EventBody) => {
    try {
        const newEvent = new Event(dataEvent);
        await newEvent.save();
        return newEvent;
    } catch (error: any) {
        throw new Error(`Error de validación al crear el evento: ${error.message}`);
    }
};

const updateEvent = async (id: String, updateEvent: Partial<EventBody>) => {
    try {
        const updateDataEvent = await Event.findByIdAndUpdate(id, updateEvent, { new: true })
        if (!updateDataEvent) {
            throw new Error("Evento no encontrado")
        }
        return updateDataEvent
    } catch (error) {
        throw new Error("Error al actualizar el evento")
    }
};
const getEventById = async (id: String) => {
    try {
        const eventById = await Event.findById(id)
        if (!eventById) {
            throw new Error("Evento no existente")
        } return eventById
    }
    catch (error) {
        throw new Error("Error al obtener el evento por id")
    }
}
const deleteEvent = async (id: String) => {
    try {
        const deletedEvent = await Event.findByIdAndDelete(id)
        if (!deletedEvent) {
            throw new Error("Evento no encontrado")
        }
        return deletedEvent
    } catch (error) {
        throw new Error("Error al borrar evento")
    }
};

export default { getEvents, createEvent, updateEvent, getEventById, deleteEvent }