/*
  Warnings:

  - Made the column `identifier` on table `Org` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Org" ALTER COLUMN "identifier" SET NOT NULL;
