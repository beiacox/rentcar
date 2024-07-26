/*
  Warnings:

  - You are about to drop the column `id_tipo` on the `vehiculos` table. All the data in the column will be lost.
  - You are about to drop the `tipos` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tipo` to the `vehiculos` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `vehiculos` DROP FOREIGN KEY `vehiculos_ibfk_1`;

-- AlterTable
ALTER TABLE `vehiculos` DROP COLUMN `id_tipo`,
    ADD COLUMN `tipo` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `tipos`;
