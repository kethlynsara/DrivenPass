import { DocumentStructure, CreateDocumentData, insert } from "../repositories/documentRepository.js";

async function generateDocumentData(documentData: DocumentStructure, userId: number) {
    let documentId = null;
    if (documentData.type === "RG") {
        documentId = 2;
    }

    if (documentData.type === "CNH") {
        documentId = 3;
    }

    return {
        userId,
        documentId,
        number: documentData.number,        
        name: documentData.name,
        issueDate: documentData.issueDate,
        expirationDate: documentData.expirationDate,
        issuingBody: documentData.issuingBody
    }
}

export async function postDocument(documentData: DocumentStructure, userId: number) {
    const documentInfo = await generateDocumentData(documentData, userId);
    await insert(documentInfo);    
}