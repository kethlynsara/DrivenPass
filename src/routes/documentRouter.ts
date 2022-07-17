import { Router } from "express";
import { getDocuments, postDocument } from "../controllers/documentController.js";
import { validateDocumentData } from "../middlewares/documentMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const documentRouter = Router();

documentRouter.post("/documents", validateToken, validateDocumentData, postDocument);
documentRouter.get("/documents", validateToken, getDocuments);

export default documentRouter;