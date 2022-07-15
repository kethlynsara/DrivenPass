import { Router } from "express";
import { getCards, postCard } from "../controllers/cardController.js";
import { validateCardData } from "../middlewares/cardMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const cardRouter = Router();

cardRouter.post("/cards", validateToken, validateCardData, postCard);
cardRouter.get("/cards", validateToken, getCards);

export default cardRouter;