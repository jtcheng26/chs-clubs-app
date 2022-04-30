-- CreateEnum
CREATE TYPE "Role" AS ENUM ('STUDENT', 'TEACHER', 'ADMIN');

-- CreateEnum
CREATE TYPE "OrgType" AS ENUM ('CLUB', 'HONOR_SOCIETY');

-- CreateTable
CREATE TABLE "Org" (
    "id" SERIAL NOT NULL,
    "type" "OrgType" NOT NULL,
    "picture" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "hook" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "meetDay" TEXT NOT NULL,
    "meetFreq" TEXT NOT NULL,
    "meetLocation" TEXT NOT NULL,
    "links" TEXT[],
    "email" TEXT NOT NULL,
    "members" INTEGER NOT NULL,

    CONSTRAINT "Org_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Person" (
    "id" SERIAL NOT NULL,
    "role" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "Person_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "orgId" INTEGER,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_OrgToPerson" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_OrgToPerson_AB_unique" ON "_OrgToPerson"("A", "B");

-- CreateIndex
CREATE INDEX "_OrgToPerson_B_index" ON "_OrgToPerson"("B");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_orgId_fkey" FOREIGN KEY ("orgId") REFERENCES "Org"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgToPerson" ADD CONSTRAINT "_OrgToPerson_A_fkey" FOREIGN KEY ("A") REFERENCES "Org"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_OrgToPerson" ADD CONSTRAINT "_OrgToPerson_B_fkey" FOREIGN KEY ("B") REFERENCES "Person"("id") ON DELETE CASCADE ON UPDATE CASCADE;
