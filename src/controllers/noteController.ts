import { Request, Response } from "express";
import { CreateNoteData } from "../repositories/noteRepository.js";
import * as noteService from "../services/noteService.js";

export async function createNote(req: Request, res: Response) {
    const data: CreateNoteData = req.body;
    const userId: number = res.locals.userId;
    await noteService.createNote({...data, userId});
    res.sendStatus(201);
}

export async function getNotes(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const notes = await noteService.getNotes(userId);
    res.send(notes);
}

export async function getNoteById(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    const userId: number = res.locals.userId;
    const note = await noteService.getNoteById(id, userId);
    res.send(note);
}