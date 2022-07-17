import { Router } from "express";
import { getDocumentById, getDocuments, postDocument } from "../controllers/documentController.js";
import { validateDocumentData } from "../middlewares/documentMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const documentRouter = Router();

documentRouter.post("/documents", validateToken, validateDocumentData, postDocument);
documentRouter.get("/documents", validateToken, getDocuments);
documentRouter.get("/documents/:id", validateToken, getDocumentById);

export default documentRouter;