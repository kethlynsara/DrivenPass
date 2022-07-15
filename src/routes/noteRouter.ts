import { Router } from "express";
import { createNote } from "../controllers/noteController.js";
import { validateNotesData } from "../middlewares/noteMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const noteRouter = Router();

noteRouter.post("/notes", validateToken, validateNotesData, createNote);

export default noteRouter;