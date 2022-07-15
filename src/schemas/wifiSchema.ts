import joi from "joi";
import { CreateWifiData } from "../repositories/wifiRepository.js";

export const wifiSchema = joi.object<CreateWifiData>({
    title: joi.string().required(),
    networkName: joi.string().required(),
    password: joi.string().required()    
})