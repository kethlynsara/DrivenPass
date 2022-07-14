import joi from "joi";
import { CreateSignUpData } from "../services/authService";

export const signUpSchema = joi.object<CreateSignUpData>({
    email: joi.string().email().required(),
    password: joi.string().length(10).required()
})