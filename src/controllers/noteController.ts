import { Request, Response } from "express";
import { CreateNoteData } from "../repositories/noteRepository";
import * as noteService from "../services/noteService.js";

export async function createNote(req: Request, res: Response) {
    const data: CreateNoteData = req.body;
    const userId: number = res.locals.userId;
    await noteService.createNote({...data, userId});
    res.sendStatus(201);
}