import joi from "joi";
import BaseJoi from 'joi';
import JoiDate from '@joi/date';

const Joi = BaseJoi.extend(JoiDate);

export const documentSchema = joi.object({
    type: joi.string().valid("RG", "CNH").required(),
    name: joi.string().required(),
    issueDate: Joi.date().format(["MM-YYYY", "MM/YYYY"]).required(),
    expirationDate: Joi.date().format(["MM-YYYY", "MM/YYYY"]).required(),
    number: joi.string().required(),
    issuingBody: joi.string().required()
})      