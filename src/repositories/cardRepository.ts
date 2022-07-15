import { Card } from "@prisma/client";
import prisma from "../config/database.js";

export type CreateCardData = Omit<Card, "id" | "createdAt" | "userId">;
export type CardStructure = Omit<Card, "id" | "createdAt">;

export async function findByIdAndTitle(userId: number, title: string) {
    return await prisma.card.findFirst({where: {userId, title}});
}

export async function insert(cardData: CardStructure) {
    await prisma.card.create({data: cardData});
}