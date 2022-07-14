import bcrypt from "bcrypt";
import { User } from "@prisma/client";
import * as authRepository from "../repositories/authRepository.js";

export type CreateSignUpData = Omit<User, "id" | "createdAt">;

async function checkUser(email: string) {
    const user = await authRepository.findByEmail(email);
    if (user) {
        throw {
            type: "conflict",
            message: "email already registered"
        }
    }
}

async function encrypt(password: string) {
    const salt = +process.env.SALT;
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

export async function signUp(signUpData: CreateSignUpData) {
    await checkUser(signUpData.email);
    const passwordHash = await encrypt(signUpData.password);
    await authRepository.insert({email: signUpData.email, password: passwordHash});
}