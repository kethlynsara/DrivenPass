import { Request, Response } from "express";

export async function postDocument(req: Request, res: Response) {
    res.sendStatus(201);
}