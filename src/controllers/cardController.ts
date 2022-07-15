import { Request, Response } from "express";

export async function postCard(req: Request, res: Response) {
    // const { body } = req;
    // const userId: number = res.locals.userId;
    // await credentialService.postCredential({...body, userId});
    res.sendStatus(201);
}