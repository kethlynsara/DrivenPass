import { Wifi } from "@prisma/client";
import { WifiStructure } from "../repositories/wifiRepository.js";
import * as wifiRepository from "../repositories/wifiRepository.js";
import * as utils from "../utils/index.js";

export async function postWifi(wifiData: WifiStructure) {
    const password = await utils.encrypt(wifiData.password);
    await wifiRepository.insert({...wifiData, password});
}

function checkExistingWifi(wifi: Wifi, userId: number) {
    if (!wifi) {
        throw {
            type: "not found",
            message: "wifi not found"
        }
    }

    if (wifi.userId !== userId) {
        throw {
            type: "unauthorized",
            message: "invalid user"
        }
    }
}

export async function getWifi(userId: number) {
    const wifiRegisters = await wifiRepository.findByUserId(userId);
    
    if (wifiRegisters.length === 0) {
        throw {
            type: "not found",
            message: "wifiRegisters not found"
        }
    }

    const response = wifiRegisters.map(wifi => {
        checkExistingWifi(wifi, userId);
        const newPassword = utils.decrypt(wifi.password);
        return {
            id: wifi.id,
            title: wifi.title,
            networkName: wifi.networkName,
            password: newPassword
        }
    })
    return response;
}

export async function getWifiById(id: number, userId: number) {
    const wifi = await wifiRepository.findById(id);
    checkExistingWifi(wifi, userId);
    const newPassword = utils.decrypt(wifi.password);

    return {
        id: wifi.id,
        title: wifi.title,
        networkName: wifi.networkName,
        password: newPassword
    }
}

export async function deleteWifi(id: number, userId: number) {
    const wifi = await wifiRepository.findById(id);
    checkExistingWifi(wifi, userId);
    await wifiRepository.deleteWifi(id);
}