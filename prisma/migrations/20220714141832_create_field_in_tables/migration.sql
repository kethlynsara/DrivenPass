/*
  Warnings:

  - Added the required column `createdAt` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `credentials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `notes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdAt` to the `wifi` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cards" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "credentials" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "notes" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "sessions" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "wifi" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL;
