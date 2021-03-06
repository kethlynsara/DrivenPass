import { Request, Response } from "express";
import { DocumentStructure } from "../repositories/documentRepository.js";
import * as documentService from "../services/documentService.js";

export async function postDocument(req: Request, res: Response) {
    const data: DocumentStructure = req.body;
    const userId: number = res.locals.userId;
    await documentService.postDocument(data, userId);
    res.sendStatus(201);
}

export async function getDocuments(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const documents = await documentService.getDocuments(userId);
    res.send(documents);
}

export async function getDocumentById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.sendStatus(401);
    }

    const userId: number = res.locals.userId;
    const document = await documentService.getDocumentById(userId, id);
    res.send(document);
}

export async function deleteDocument(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    if (!id) {
        return res.sendStatus(401);
    }

    const userId: number = res.locals.userId;
    await documentService.deleteDocument(userId, id);
    res.sendStatus(200);
}