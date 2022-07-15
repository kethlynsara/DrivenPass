import { Router } from "express";
import { deleteCard, getCardById, getCards, postCard } from "../controllers/cardController.js";
import { validateCardData } from "../middlewares/cardMiddleware.js";
import { validateToken } from "../middlewares/tokenMiddleware.js";

const cardRouter = Router();

cardRouter.post("/cards", validateToken, validateCardData, postCard);
cardRouter.get("/cards", validateToken, getCards);
cardRouter.get("/cards/:id", validateToken, getCardById);
cardRouter.delete("/cards/:id/delete", validateToken, deleteCard);

export default cardRouter;