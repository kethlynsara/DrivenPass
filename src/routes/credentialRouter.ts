import { Router } from "express";
import { getCredentials, postCredential } from "../controllers/credentialController.js";
import { validateCredentialData } from "../middlewares/credentialMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const credentialRouter = Router();

credentialRouter.get("/credentials", validateToken, getCredentials);
credentialRouter.post("/credentials", validateToken, validateCredentialData, postCredential);

export default credentialRouter;