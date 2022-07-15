import { Request, Response } from "express";
import { CreateCardData } from "../repositories/cardRepository.js";
import * as cardService from "../services/cardService.js";

export async function postCard(req: Request, res: Response) {
    const body: CreateCardData = req.body;
    const userId: number = res.locals.userId;
    await cardService.postCard({...body}, userId);
    res.sendStatus(201);
}

export async function getCards(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const cards = await cardService.getCards(userId);
    res.send(cards);
}

export async function getCardById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.sendStatus(401);
    }

    const userId: number = res.locals.userId;
    const card = await cardService.getCardById(id, userId);
    res.send(card);
}