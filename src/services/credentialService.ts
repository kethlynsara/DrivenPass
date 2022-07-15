import Cryptr from "cryptr";
import dotenv from "dotenv";
import { Credential } from "@prisma/client";;
import { CreateCredentialData } from "../repositories/credentialRepository.js";
import * as credentialRepository from "../repositories/credentialRepository.js";
import * as utils from "../utils/index.js";
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

function checkExistingCredential(credential: Credential, userId: number) {
    if (!credential) {
        throw {
            type: "not found",
            message: "credential not found"
        }
    }

    if (credential.userId !== userId) {
        throw {
            type: "not found",
            message: "credentials not found"
        }
    }
}

export async function postCredential(credentialData: CreateCredentialData) {
    await checkCredentialTitle(credentialData);
    const passwordHash = await utils.encrypt(credentialData.password);    
    await credentialRepository.insert({...credentialData, password: passwordHash});
}

export async function getCredentials(userId: number) {
    const credentials = await credentialRepository.findByUserId(userId);
    if (credentials.length === 0) {
        throw {
            type: "not found",
            message: "credentials not found"
        }
    }
    
    const response = credentials.map(credential => {
        checkExistingCredential(credential, userId);
        const newPassword = utils.decrypt(credential.password);        

        return {
            id: credential.id,
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
    checkExistingCredential(credential, userId);
    const newPassword = utils.decrypt(credential.password);    

    const response = {
        id: credential.id,
        title: credential.title,
        url: credential.url,
        username: credential.username,
        password: newPassword
    }
    return response;
}

export async function deleteCredential(id: number, userId: number) {
    const credential = await credentialRepository.findById(id);
    checkExistingCredential(credential, userId);
    await credentialRepository.deleteCredential(id);
}