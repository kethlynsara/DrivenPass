import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    const data: authService.CreateAuthData = req.body;
    await authService.signUp(data);
    res.sendStatus(201);
}

export async function signIn(req: Request, res: Response) {
    const data: authService.CreateAuthData = req.body;
    const token = await authService.signIn(data);
    res.send({token});
}