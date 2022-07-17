import { Document } from "@prisma/client";
import prisma from "../config/database.js";

export type CreateDocumentData = Omit<Document, "id" | "createdAt">;
export type DocumentStructure = Omit<Document, "id" | "createdAt" | "userId">;

export async function insert(documentData: CreateDocumentData) {
    return await prisma.document.create({data: documentData});
}

export async function findByUserId(userId: number) {
    return await prisma.document.findMany({where: {userId}});
}

export async function findById(id: number) {
    return await prisma.document.findFirst({where: {id}});
}

export async function deleteDocumentRegister(id: number) {
    return await prisma.document.delete({where: {id}});
}