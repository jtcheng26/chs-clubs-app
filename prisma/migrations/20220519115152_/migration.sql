/*
  Warnings:

  - You are about to drop the column `links` on the `Org` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Org" DROP COLUMN "links";

-- CreateTable
CREATE TABLE "Link" (
    "id" SERIAL NOT NULL,
    "href" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "orgId" INTEGER,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Link" ADD CONSTRAINT "Link_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE SET NULL ON UPDATE CASCADE;
