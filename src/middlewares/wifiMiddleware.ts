import { NextFunction, Request, Response } from "express";
import { wifiSchema } from "../schemas/wifiSchema.js";

export async function validateWifiData(req: Request,  res: Response, next: NextFunction) {
    const data = req.body;

    const { error } = wifiSchema.validate(data, {abortEarly: false});

    if (error) {
        return res.status(422).send(error.details.map((detail) => detail.message));
    }

    next();
}