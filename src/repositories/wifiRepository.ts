import { Wifi } from "@prisma/client";
import prisma from "../config/database.js";

export type CreateWifiData = Omit<Wifi, "id" | "userId" | "createdAt">;
export type WifiStructure = Omit<Wifi, "id" | "createdAt">;

export async function insert(wifiData: WifiStructure) {
    await prisma.wifi.create({data: wifiData});
}

export async function findByUserId(userId: number) {
    return await prisma.wifi.findMany({where: {userId}});
}