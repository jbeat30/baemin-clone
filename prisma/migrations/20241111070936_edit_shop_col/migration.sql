/*
  Warnings:

  - You are about to drop the column `minumumOrder` on the `Shop` table. All the data in the column will be lost.
  - You are about to drop the column `tags` on the `Shop` table. All the data in the column will be lost.
  - Added the required column `minimumOrder` to the `Shop` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tag` to the `Shop` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shop" DROP COLUMN "minumumOrder",
DROP COLUMN "tags",
ADD COLUMN     "minimumOrder" TEXT NOT NULL,
ADD COLUMN     "tag" TEXT NOT NULL;
