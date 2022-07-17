import { Document } from "@prisma/client";
import prisma from "../config/database.js";

export interface DocumentStructure {
    type: string;
    name: string;
    issueDate: string;
    expirationDate: string;
    number: string;
    issuingBody: string;
}

export type CreateDocumentData = Omit<Document, "id" | "createdAt">;

export async function insert(documentData: CreateDocumentData) {
    return await prisma.document.create({data: documentData})
}