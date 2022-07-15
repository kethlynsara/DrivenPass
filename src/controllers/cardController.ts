import { Request, Response } from "express";
import { CreateCardData } from "../repositories/cardRepository.js";
import * as cardService from "../services/cardService.js";

export async function postCard(req: Request, res: Response) {
    const body: CreateCardData = req.body;
    const userId: number = res.locals.userId;
    await cardService.postCard({...body}, userId);
    res.sendStatus(201);
}