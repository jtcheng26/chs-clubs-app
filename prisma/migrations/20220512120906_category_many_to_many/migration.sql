/*
  Warnings:

  - You are about to drop the column `orgId` on the `Category` table. All the data in the column will be lost.
  - Changed the type of `role` on the `Person` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_orgId_fkey";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "orgId";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL;

-- CreateTable
CREATE TABLE "_CategoryToOrg" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoryToOrg_AB_unique" ON "_CategoryToOrg"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoryToOrg_B_index" ON "_CategoryToOrg"("B");

-- AddForeignKey
ALTER TABLE "_CategoryToOrg" ADD CONSTRAINT "_CategoryToOrg_A_fkey" FOREIGN KEY ("A") REFERENCES "Category"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoryToOrg" ADD CONSTRAINT "_CategoryToOrg_B_fkey" FOREIGN KEY ("B") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;
