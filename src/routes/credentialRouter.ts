import { Router } from "express";
import { deleteCredential, getCredentialById, getCredentials, postCredential } from "../controllers/credentialController.js";
import { validateCredentialData } from "../middlewares/credentialMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const credentialRouter = Router();

credentialRouter.get("/credentials", validateToken, getCredentials);
credentialRouter.get("/credentials/:id", validateToken, getCredentialById);
credentialRouter.post("/credentials", validateToken, validateCredentialData, postCredential);
credentialRouter.delete("/credentials/:id/delete", validateToken, deleteCredential);


export default credentialRouter;