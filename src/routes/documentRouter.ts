import { Router } from "express";
import { postDocument } from "../controllers/documentController.js";
import { validateDocumentData } from "../middlewares/documentMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const documentRouter = Router();

documentRouter.post("/documents", validateToken, validateDocumentData, postDocument);

export default documentRouter;