import { Request, Response } from "express";
import { DocumentStructure } from "../repositories/documentRepository.js";
import * as documentService from "../services/documentService.js";

export async function postDocument(req: Request, res: Response) {
    const data: DocumentStructure = req.body;
    const userId: number = res.locals.userId;
    await documentService.postDocument(data, userId);
    res.sendStatus(201);
}