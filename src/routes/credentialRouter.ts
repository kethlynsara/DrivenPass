import { Router } from "express";
import { postCredential } from "../controllers/credentialController.js";
import { validateCredentialData } from "../middlewares/credentialMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const credentialRouter = Router();

credentialRouter.post("/credentials", validateToken, validateCredentialData, postCredential);

export default credentialRouter;