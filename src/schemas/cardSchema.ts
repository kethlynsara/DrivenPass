import joi from "joi";
import BaseJoi from 'joi';
import JoiDate from '@joi/date';

const Joi = BaseJoi.extend(JoiDate);

export const cardSchema = joi.object({
    title: joi.string().required(),
    number: joi.string().required(),
    name: joi.string().required(),
    CVC: joi.string().length(3).required(),
    expirationDate: Joi.date().format(["MM-YYYY", "MM/YYYY"]).required(),
    password: joi.string().required(),
    isVirtual: joi.boolean().required(),
    type: joi.string().valid("credit", "debit", "creditAndDebit")
});
