-- CreateTable
CREATE TABLE "quotes" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "quoteId" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT,
    "company" TEXT,
    "projectName" TEXT,
    "projectType" TEXT,
    "projectDescription" TEXT,
    "budget" TEXT,
    "timeline" TEXT,
    "features" TEXT,
    "inspiration" TEXT,
    "additionalInfo" TEXT,
    "requestCall" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "quotes_quoteId_key" ON "quotes"("quoteId");
