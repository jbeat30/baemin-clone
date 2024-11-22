-- CreateTable
CREATE TABLE "Menu" (
    "id" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "menu" TEXT NOT NULL,
    "price" INTEGER NOT NULL,
    "shopId" TEXT,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Menu_shopId_idx" ON "Menu"("shopId");

-- AddForeignKey
ALTER TABLE "Menu" ADD CONSTRAINT "Menu_shopId_fkey" FOREIGN KEY ("shopId") REFERENCES "Shop"("id") ON DELETE SET NULL ON UPDATE CASCADE;
