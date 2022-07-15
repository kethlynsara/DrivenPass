import { Request, Response } from "express";
import { CreateWifiData } from "../repositories/wifiRepository.js";
import * as wifiRepository from "../services/wifiService.js";

export async function postWifi(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const data: CreateWifiData= req.body;
    await wifiRepository.postWifi({...data, userId});
    res.sendStatus(201);
}