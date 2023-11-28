/*
  Warnings:

  - Added the required column `priority` to the `urls` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `urls` ADD COLUMN `priority` INTEGER NOT NULL;
