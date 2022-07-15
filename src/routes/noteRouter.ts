import { Router } from "express";
import { createNote, getNoteById, getNotes } from "../controllers/noteController.js";
import { validateNotesData } from "../middlewares/noteMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const noteRouter = Router();

noteRouter.post("/notes", validateToken, validateNotesData, createNote);
noteRouter.get("/notes", validateToken, getNotes);
noteRouter.get("/notes/:id", validateToken, getNoteById);


export default noteRouter;