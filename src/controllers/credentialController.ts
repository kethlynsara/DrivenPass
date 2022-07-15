import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";

export async function postCredential(req: Request, res: Response) {
    const { body } = req;
    const userId: number = res.locals.userId;

    await credentialService.postCredential({...body, userId});
    res.sendStatus(201);
}

export async function getCredentials(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const credentials = await credentialService.getCredentials(userId);
    res.send(credentials);
}

export async function getCredentialById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const userId: number = res.locals.userId;
    const credential = await credentialService.getCredentialById(id, userId);
    res.send(credential);
}