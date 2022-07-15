import { Request, Response } from "express";
import * as credentialService from "../services/credentialService.js";

export async function postCredential(req: Request, res: Response) {
    const { body } = req;
    const userId: number = res.locals.userId;

    await credentialService.postCredential({...body, userId});
    res.sendStatus(201);
}
