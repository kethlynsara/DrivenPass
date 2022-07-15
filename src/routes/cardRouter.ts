import { Router } from "express";
import { postCard } from "../controllers/cardController.js";
import { validateCardData } from "../middlewares/cardMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const cardRouter = Router();

cardRouter.post("/cards", validateToken, validateCardData, postCard);

export default cardRouter;