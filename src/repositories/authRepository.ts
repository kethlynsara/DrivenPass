import prisma from "../config/database.js";
import { CreateSignUpData } from "../services/authService.js";

export function findByEmail(email: string) {
    const user = prisma.user.findFirst({where: {email}});
    return user;
}

export async function insert(signUpData: CreateSignUpData) {
    await prisma.user.create({data: signUpData});
}