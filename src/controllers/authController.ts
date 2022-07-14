import { Request, Response } from "express";
import * as authService from "../services/authService.js";

export async function signUp(req: Request, res: Response) {
    const data: authService.CreateSignUpData = req.body;
    await authService.signUp(data);
    res.sendStatus(201);
}