import Cryptr from "cryptr";
import dotenv from "dotenv";
dotenv.config();

export async function encrypt(password: string) {
    const cryptrKey = process.env.CRYPTR_KEY;
    const cryptr = new Cryptr(cryptrKey);
    const encryptedString = cryptr.encrypt(password);
    return encryptedString;
}

export function decrypt(encryptedString: string) {
    const cryptrKey = process.env.CRYPTR_KEY;
    const cryptr = new Cryptr(cryptrKey);
    const decryptedString = cryptr.decrypt(encryptedString);
    return decryptedString;
}