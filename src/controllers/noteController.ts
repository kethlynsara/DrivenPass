import { Request, Response } from "express";
import * as noteService from "../services/noteService.js";

export async function createNote(req: Request, res: Response) {
    res.sendStatus(201);
}