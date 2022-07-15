import { Router } from "express";
import { validateNotesData } from "../middlewares/noteMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const noteRouter = Router();

noteRouter.post("/notes", validateToken, validateNotesData);

export default noteRouter;