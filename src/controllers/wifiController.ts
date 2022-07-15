import { Request, Response } from "express";
import { CreateWifiData } from "../repositories/wifiRepository.js";
import * as wifiService from "../services/wifiService.js";

export async function postWifi(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const data: CreateWifiData= req.body;
    await wifiService.postWifi({...data, userId});
    res.sendStatus(201);
}

export async function getWifi(req: Request, res: Response) {
    const userId: number = res.locals.userId;
    const wifiRegisters = await wifiService.getWifi(userId);
    res.send(wifiRegisters);
}