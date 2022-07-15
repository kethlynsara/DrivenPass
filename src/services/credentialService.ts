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

export async function postCredential(credentialData: CreateCredentialData) {
    await checkCredentialTitle(credentialData);
    const passwordHash = await encrypt(credentialData.password);    
    await credentialRepository.insert({...credentialData, password: passwordHash});
}