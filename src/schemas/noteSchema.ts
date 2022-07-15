import joi from "joi";
import { CreateNoteData } from "../repositories/noteRepository.js";

export const noteSchema = joi.object<CreateNoteData>({
    title: joi.string().max(50).required(),
    note: joi.string().max(1000).required()
})