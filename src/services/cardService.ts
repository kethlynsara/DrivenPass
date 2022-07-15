import { CardStructure, CreateCardData } from "../repositories/cardRepository.js";
import * as cardRepository from "../repositories/cardRepository.js";
import * as utils from "../utils/index.js";
import { Card } from "@prisma/client";

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

function checkExistingCard(card: Card, userId: number) {
    if (!card) {
        throw {
            type: "not found",
            message: "card not found"
        }
    }

    if (card.userId !== userId) {
        throw {
            type: "not found",
            message: "card not found"
        }
    }
}

export async function getCards(userId: number) {
    const cards = await cardRepository.findByUserId(userId);
    if (cards.length === 0) {
        throw {
            type: "not found",
            message: "cards not found"
        }
    }
    
    const response = cards.map(card => {
        checkExistingCard(card, userId);
        const newPassword = utils.decrypt(card.password);   
        const newCVC = utils.decrypt(card.CVC);      

        return {
            id: card.id,
            title: card.title,
            number: card.number,
            name: card.name,
            CVC: newCVC,
            expirationDate: card.expirationDate,
            password: newPassword,
            isVirtual: card.isVirtual,
            type: card.type            
        }
    })
    return response;
}