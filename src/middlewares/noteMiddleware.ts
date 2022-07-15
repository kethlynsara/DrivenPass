import { NextFunction, Request, Response } from "express";
import { noteSchema } from "../schemas/noteSchema.js";

export async function validateNotesData(req: Request,  res: Response, next: NextFunction) {
    const data = req.body;

    const { error } = noteSchema.validate(data, {abortEarly: false});

    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
}