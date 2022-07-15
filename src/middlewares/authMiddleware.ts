import { NextFunction, Request, Response } from "express";
import { signUpSchema } from "../schemas/authSchema.js";
import { CreateAuthData } from "../services/authService.js";

export async function validateAuthData(req: Request,  res: Response, next: NextFunction) {
    const data: CreateAuthData = req.body;

    const { error } = signUpSchema.validate(data, {abortEarly: false});

    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
}