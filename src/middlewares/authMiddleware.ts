import { NextFunction, Request, Response } from "express";
import { signUpSchema } from "../schemas/authSchema.js";
import { CreateSignUpData } from "../services/authService";

export async function validateSignUpData(req: Request,  res: Response, next: NextFunction) {
    const data: CreateSignUpData = req.body;

    const { error } = signUpSchema.validate(data, {abortEarly: false});

    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
}