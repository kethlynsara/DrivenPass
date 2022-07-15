import { Note } from "@prisma/client";
import prisma from "../config/database.js";

export type CreateNoteData = Omit<Note, "id" | "createdAt" | "userId">;
export type NoteStructure = Omit<Note, "id" | "createdAt">;

export async function findByIdAndTitle(userId: number, title: string) {
    return await prisma.note.findFirst({where: {userId, title}});
}

export async function insert(noteData: NoteStructure) {
    return await prisma.note.create({data: noteData});
}
