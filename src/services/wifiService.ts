import { WifiStructure } from "../repositories/wifiRepository.js";
import * as wifiRepository from "../repositories/wifiRepository.js";
import * as utils from "../utils/index.js";

export async function postWifi(wifiData: WifiStructure) {
    const password = await utils.encrypt(wifiData.password);
    await wifiRepository.insert({...wifiData, password});
}