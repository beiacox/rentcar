/*
  Warnings:

  - You are about to drop the column `clave` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `correo` on the `clientes` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `credenciales` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `credenciales` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `credenciales` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `credenciales` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `credenciales` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[correo]` on the table `credenciales` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[usuario]` on the table `credenciales` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id_cliente]` on the table `credenciales` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `actualizado` to the `credenciales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `clave` to the `credenciales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `correo` to the `credenciales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `usuario` to the `credenciales` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_email_key` ON `credenciales`;

-- DropIndex
DROP INDEX `User_username_key` ON `credenciales`;

-- AlterTable
ALTER TABLE `clientes` DROP COLUMN `clave`,
    DROP COLUMN `correo`;

-- AlterTable
ALTER TABLE `credenciales` DROP COLUMN `createdAt`,
    DROP COLUMN `email`,
    DROP COLUMN `password`,
    DROP COLUMN `updatedAt`,
    DROP COLUMN `username`,
    ADD COLUMN `actualizado` DATETIME(3) NOT NULL,
    ADD COLUMN `clave` VARCHAR(191) NOT NULL,
    ADD COLUMN `correo` VARCHAR(191) NOT NULL,
    ADD COLUMN `creado` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `id_cliente` INTEGER NULL,
    ADD COLUMN `usuario` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_email_key` ON `credenciales`(`correo`);

-- CreateIndex
CREATE UNIQUE INDEX `User_username_key` ON `credenciales`(`usuario`);

-- CreateIndex
CREATE UNIQUE INDEX `id_cliente` ON `credenciales`(`id_cliente`);

-- AddForeignKey
ALTER TABLE `credenciales` ADD CONSTRAINT `FK_ClienteCredenciales` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
