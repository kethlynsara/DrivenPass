import prisma from "../config/database.js";
import { CreateAuthData, CreateSessionData } from "../services/authService.js";

export function findByEmail(email: string) {
    const user = prisma.user.findFirst({where: {email}});
    return user;
}

export async function insert(signUpData: CreateAuthData) {
    await prisma.user.create({data: signUpData});
}

export async function insertSession(sessionData: CreateSessionData) {
    await prisma.session.create({data: sessionData});
}