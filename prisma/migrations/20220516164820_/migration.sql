/*
  Warnings:

  - A unique constraint covering the columns `[identifier]` on the table `Org` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Org_identifier_key" ON "Org"("identifier");
