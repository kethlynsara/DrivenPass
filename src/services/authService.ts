import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Session, User } from "@prisma/client";
import * as authRepository from "../repositories/authRepository.js";
dotenv.config();

export type CreateAuthData = Omit<User, "id" | "createdAt">;
export type CreateSessionData = Omit<Session, "id" | "createdAt">;

async function checkUser(email: string, type: string) {
    const user = await authRepository.findByEmail(email);
    if (user && type === "signUp") {
        throw {
            type: "conflict",
            message: "email already registered"
        }
    }

    if (!user && type === "signIn") {
        throw {
            type: "not found",
            message: "email not found"
        }
    }
    return user;
}

async function encrypt(password: string) {
    const salt = +process.env.SALT;
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

async function decrypt(signInData: CreateAuthData) {
    const user = await checkUser(signInData.email, "signIn");
    const comparePassword = bcrypt.compareSync(signInData.password, user.password);
    
    if (!comparePassword) {
        throw {
            type: "unauthorized",
            message: "invalid password"
        }
    }

    return user.id;
}

async function createToken(userId: number) {
    const data = {userId};
    const jwtKey = process.env.JWT_KEY;
    const config = { expiresIn: 60*60*24*30 }
    const token = jwt.sign(data, jwtKey, config);
    return {userId, token};
}

export async function signUp(signUpData: CreateAuthData) {
    await checkUser(signUpData.email, "signUp");
    const passwordHash = await encrypt(signUpData.password);
    await authRepository.insert({email: signUpData.email, password: passwordHash});
}

export async function signIn(signInData: CreateAuthData) {
    await checkUser(signInData.email, "signIn");

    const userId = await decrypt(signInData);
    const sessionData = await createToken(userId);

    await authRepository.insertSession(sessionData);
    return sessionData.token;
}