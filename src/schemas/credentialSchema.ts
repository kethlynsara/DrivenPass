import joi from "joi";

export const credentialSchema = joi.object({
    url: joi.string().required(),
    username: joi.string().required(),
    password: joi.string().required(),
    title: joi.string().required()
})