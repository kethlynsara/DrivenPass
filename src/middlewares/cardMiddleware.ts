import { NextFunction, Request, Response } from "express";
import { CreateCardData } from "../repositories/cardRepository.js";
import { cardSchema } from "../schemas/cardSchema.js";

export async function validateCardData(req: Request,  res: Response, next: NextFunction) {
    const data: CreateCardData = req.body;

    const { error } = cardSchema.validate(data, {abortEarly: false});

    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    if (!parseInt(data.CVC)) {
        return res.status(422).send("invalid CVC");
    }

    next();
}