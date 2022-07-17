import { DocumentStructure, CreateDocumentData, insert, findByUserId, findById, deleteDocumentRegister } from "../repositories/documentRepository.js";

async function generateDocumentData(documentData: DocumentStructure, userId: number) {
    let documentId = null;
    if (documentData.type === "RG") {
        documentId = 2;
    }

    if (documentData.type === "CNH") {
        documentId = 3;
    }

    return {...documentData, userId, documentId}
}

export async function postDocument(documentData: DocumentStructure, userId: number) {
    const documentInfo = await generateDocumentData(documentData, userId);
    await insert(documentInfo);    
}

function checkExistingDocument(document: CreateDocumentData, userId: number) {
    if (!document) {
        throw {
            type: "not found",
            message: "document not found"
        }
    }

    if (document.userId !== userId) {
        throw {
            type: "unauthorized",
            message: "invalid user"
        }
    }
}

export async function getDocuments(userId: number) {
    const documents = await findByUserId(userId);
    
    if (documents.length === 0) {
        throw {
            type: "not found",
            message: "documents not found"
        }
    }

    const response = documents.map(document => {
        checkExistingDocument(document, userId);
        return {
            id: document.id,
            type: document.type,
            name: document.name,
            issueDate: document.issueDate,
            expirationDate: document.expirationDate,
            number: document.number,
            issuingBody: document.issuingBody
        }
    })
    return response;
}

export async function getDocumentById(userId: number, id: number) {
    const document = await findById(id);
    checkExistingDocument(document, userId);

    return {
        id: document.id,
        type: document.type,
        name: document.name,
        issueDate: document.issueDate,
        expirationDate: document.expirationDate,
        number: document.number,
        issuingBody: document.issuingBody
    }
}

export async function deleteDocument(userId: number, id:  number ) {
    const document = await findById(id);
    checkExistingDocument(document, userId);
    await deleteDocumentRegister(id);
}