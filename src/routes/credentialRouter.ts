import { Router } from "express";
import { postCredential } from "../controllers/credentialController.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const credentialRouter = Router();

credentialRouter.post("/credentials", validateToken, postCredential);

export default credentialRouter;