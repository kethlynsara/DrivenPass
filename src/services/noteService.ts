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