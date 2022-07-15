import Cryptr from "cryptr";
import dotenv from "dotenv";
import { CreateCredentialData } from "../repositories/credentialRepository.js";
import * as credentialRepository from "../repositories/credentialRepository.js";
dotenv.config();

async function checkCredentialTitle(credentialData: CreateCredentialData) {
    const credential = await credentialRepository.findByIdAndTitle(credentialData.userId, credentialData.title);
    if (credential) {
        throw {
            type: "unauthorized",
            message: "invalid data"
        }
    }
}

async function encrypt(password: string) {
    const cryptrKey = process.env.CRYPTR_KEY;
    const cryptr = new Cryptr(cryptrKey);
    const encryptedString = cryptr.encrypt(password);
    return encryptedString;
}

function decrypt(encryptedString: string) {
    const cryptrKey = process.env.CRYPTR_KEY;
    const cryptr = new Cryptr(cryptrKey);
    const decryptedString = cryptr.decrypt(encryptedString);
    return decryptedString;
}

export async function postCredential(credentialData: CreateCredentialData) {
    await checkCredentialTitle(credentialData);
    const passwordHash = await encrypt(credentialData.password);    
    await credentialRepository.insert({...credentialData, password: passwordHash});
}

export async function getCredentials(userId: number) {
    const credentials = await credentialRepository.findByUserId(userId);

    const response = credentials.map(credential => {
        const newPassword = decrypt(credential.password);
        if (credential.userId !== userId || !credential) {
            throw {
                type: "not found",
                message: "credentials not found"
            }
        }

        return {
            title: credential.title,
            url: credential.url,
            username: credential.username,
            password: newPassword
        }
    })
    return response;
}

export async function getCredentialById(id: number, userId: number) {
    const credential = await credentialRepository.findById(id);
    const newPassword = decrypt(credential.password);

    if (credential.userId !== userId || !credential) {
        throw {
            type: "not found",
            message: "credentials not found"
        }
    }

    const response = {
        title: credential.title,
        url: credential.url,
        username: credential.username,
        password: newPassword
    }
    return response;
}