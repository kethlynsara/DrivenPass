import { CardStructure, CreateCardData } from "../repositories/cardRepository.js";
import * as cardRepository from "../repositories/cardRepository.js";
import * as utils from "../utils/index.js";

async function checkCardTitle(cardData: CardStructure) {
    const note = await cardRepository.findByIdAndTitle(cardData.userId, cardData.title);
    if (note) {
        throw {
            type: "unauthorized",
            message: "invalid data"
        }
    }
}

export async function postCard(cardData: CreateCardData, userId: number) {
    await checkCardTitle({...cardData, userId});
    const password = await utils.encrypt(cardData.password);
    const CVC = await utils.encrypt(cardData.CVC)
    await cardRepository.insert({...cardData, password, CVC, userId});
}