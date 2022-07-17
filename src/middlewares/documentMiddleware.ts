import { NextFunction, Request, Response } from "express";
import { documentSchema } from "../schemas/documentSchema.js";

export async function validateDocumentData(req: Request,  res: Response, next: NextFunction) {
    const data = req.body;

    const { error } = documentSchema.validate(data, {abortEarly: false});

    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
}