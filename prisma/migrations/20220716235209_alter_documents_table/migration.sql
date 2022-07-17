/*
  Warnings:

  - A unique constraint covering the columns `[userId,title]` on the table `cards` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `type` on the `cards` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "card_type" AS ENUM ('debit', 'credit', 'debitAndCredit');

-- AlterTable
ALTER TABLE "cards" DROP COLUMN "type",
ADD COLUMN     "type" "card_type" NOT NULL;

-- DropEnum
DROP TYPE "Type";

-- CreateTable
CREATE TABLE "documents_type " (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "documents_type _pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "documents" (
    "id" SERIAL NOT NULL,
    "documentId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "issueDate" TEXT NOT NULL,
    "expirationDate" TEXT NOT NULL,
    "number" TEXT NOT NULL,
    "issuingBody" TEXT NOT NULL,

    CONSTRAINT "documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cards_userId_title_key" ON "cards"("userId", "title");

-- AddForeignKey
ALTER TABLE "documents" ADD CONSTRAINT "documents_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "documents_type "("id") ON DELETE RESTRICT ON UPDATE CASCADE;
