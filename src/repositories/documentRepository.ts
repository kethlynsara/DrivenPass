import { Document } from "@prisma/client";

export type CreateDocumentData = Omit<Document, "id" | "documentId" | "createdAt">;