import joi from "joi";
import { CreateAuthData } from "../services/authService";

export const signUpSchema = joi.object<CreateAuthData>({
    email: joi.string().email().required(),
    password: joi.string().length(10).required()
})