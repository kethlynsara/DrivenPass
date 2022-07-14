import { NextFunction, Request, Response } from "express";
import * as authRepository from "../repositories/authRepository.js";

export async function validateToken(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.sendStatus(401);
    }

    const token = authorization?.replace("Bearer", "").trim();
    if (!token) {
        return res.status(401).send("invalid token");
    }

    const session = await authRepository.findSession(token);
    if (!token || !session) {
        return res.status(401).send("invalid token");
    }

    const { userId } = session; 
    res.locals.userId = userId;
    
    next();
}