import eventModel from "../models/eventModel";
import { Request, Response } from "express"
import { EventBody } from "../interfaces/eventInterface";


const getAllEvents = async (req: Request, res: Response) => {
    try {
        const events = await eventModel.getEvents()
        res.status(200).json(events)

    } catch (error: any) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

const getEventById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const product = await eventModel.getEventById(id)
        res.status(200).json(product)
    } catch (error: any) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

const createEvent = async (req: Request, res: Response) => {
    const { name, description, date, addres } = req.body
    const eventBody: EventBody = { name, description, date, addres }
    try {
        const newEvent = await eventModel.createEvent(eventBody)
        res.status(201).json(newEvent)
    } catch (error: any) {

        res.status(500).json({ status: 500, error: error.message })
        console.log(error)

    }
}

const updateEvent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const { name, description, date, addres } = req.body
        const updateDataEvent = await eventModel.updateEvent(id, { name, description, date, addres })
        res.status(200).json(updateDataEvent)
    } catch (error: any) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

const deleteEvent = async (req: Request, res: Response) => {
    try {
        const { id } = req.params
        const deletedEvent = await eventModel.deleteEvent(id)
        res.status(200).json(deletedEvent)
    } catch (error: any) {
        res.status(500).json({ status: 500, error: error.message })
    }
}

export { getAllEvents, getEventById, createEvent, updateEvent, deleteEvent }