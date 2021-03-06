import { Router } from "express";
import { signIn, signUp } from "../controllers/authController.js";
import { validateAuthData } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post("/sign-up", validateAuthData, signUp);
authRouter.post("/sign-in", validateAuthData, signIn);

export default authRouter;