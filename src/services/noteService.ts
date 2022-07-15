import { Note } from "@prisma/client";
import * as noteRepository from "../repositories/noteRepository.js";

async function checkNoteTitle(noteData: noteRepository.NoteStructure) {
    const note = await noteRepository.findByIdAndTitle(noteData.userId, noteData.title);
    if (note) {
        throw {
            type: "unauthorized",
            message: "invalid data"
        }
    }
}

export async function createNote(noteData: noteRepository.NoteStructure) {
    await checkNoteTitle(noteData);
    await noteRepository.insert(noteData);
}

function checkExistingNote(note: Note, userId: number) {
    if (!note) {
        throw {
            type: "not found",
            message: "note not found"
        }
    }

    if (note.userId !== userId) {
        throw {
            type: "unauthorized",
            message: "invalid user"
        }
    }
}

export async function getNotes(userId: number) {
    const notes = await noteRepository.findByUserId(userId);

    if (notes.length === 0) {
        throw {
            type: "not found",
            message: "notes not found"
        }
    }

    const response = notes.map(note => {
        checkExistingNote(note, userId);
        return {
            id: note.id,
            title: note.title,
            note: note.note
        }
    })
    return response;
}

export async function getNoteById(id: number, userId: number) {
    const note = await noteRepository.findById(id);
    checkExistingNote(note, userId);

    return {
        id: note.id,
        title: note.title,
        note: note.note
    }
}

export async function deleteNote(id: number, userId: number) {
    const note = await noteRepository.findById(id);
    checkExistingNote(note, userId);
    await noteRepository.deleteNote(id);
}