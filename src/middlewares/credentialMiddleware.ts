import { NextFunction, Request, Response } from "express";
import { credentialSchema } from "../schemas/credentialSchema.js";

export async function validateCredentialData(req: Request,  res: Response, next: NextFunction) {
    const data = req.body;

    const { error } = credentialSchema.validate(data, {abortEarly: false});

    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
}