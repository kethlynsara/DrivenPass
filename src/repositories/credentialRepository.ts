import { Credential } from "@prisma/client";
import prisma from "../config/database.js";

export type CreateCredentialData = Omit<Credential, "id" | "createdAt">;

export async function findByIdAndTitle(userId: number, title: string) {
    return await prisma.credential.findFirst({where: {userId, title}});
}

export async function findById(userId: number) {
    return await prisma.credential.findMany({where: {userId}});
}

export async function insert(credentialData: CreateCredentialData) {
    return await prisma.credential.create({data: credentialData});
}