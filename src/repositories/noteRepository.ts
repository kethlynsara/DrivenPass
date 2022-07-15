import { Note } from "@prisma/client";
import prisma from "../config/database.js";

export type CreateNoteData = Omit<Note, "id" | "createdAt" | "userId">;
export type NoteStructure = Omit<Note, "id" | "createdAt">;

export async function findByIdAndTitle(userId: number, title: string) {
    return await prisma.note.findFirst({where: {userId, title}});
}

export async function insert(noteData: NoteStructure) {
    await prisma.note.create({data: noteData});
}

export async function findByUserId(userId: number) {
    return await prisma.note.findMany({where: {userId}})
}

export async function findById(id: number) {
    return await prisma.note.findFirst({where: {id}})
}

export async function deleteNote(id: number) {
    await prisma.note.delete({where: {id}})
}

