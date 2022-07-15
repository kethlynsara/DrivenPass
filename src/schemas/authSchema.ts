import joi from "joi";
import { CreateAuthData } from "../services/authService.js";

export const signUpSchema = joi.object<CreateAuthData>({
    email: joi.string().email().required(),
    password: joi.string().length(10).required()
})