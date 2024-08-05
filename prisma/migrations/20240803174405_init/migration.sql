/*
  Warnings:

  - You are about to drop the column `cantidad` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the column `f_entrega` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the column `f_recogida` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the column `f_reserva` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the column `id_cliente` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the column `id_vehiculo` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the column `monto` on the `reservas` table. All the data in the column will be lost.
  - You are about to drop the column `tipo_precio` on the `reservas` table. All the data in the column will be lost.
  - Added the required column `clienteId` to the `reservas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupDate` to the `reservas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupLocation` to the `reservas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pickupTime` to the `reservas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnDate` to the `reservas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnLocation` to the `reservas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `returnTime` to the `reservas` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vehiculoId` to the `reservas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `reservas` DROP FOREIGN KEY `reservas_ibfk_1`;

-- DropForeignKey
ALTER TABLE `reservas` DROP FOREIGN KEY `reservas_ibfk_2`;

-- AlterTable
ALTER TABLE `reservas` DROP COLUMN `cantidad`,
    DROP COLUMN `estado`,
    DROP COLUMN `f_entrega`,
    DROP COLUMN `f_recogida`,
    DROP COLUMN `f_reserva`,
    DROP COLUMN `id_cliente`,
    DROP COLUMN `id_vehiculo`,
    DROP COLUMN `monto`,
    DROP COLUMN `tipo_precio`,
    ADD COLUMN `clienteId` INTEGER NOT NULL,
    ADD COLUMN `pickupDate` DATETIME(3) NOT NULL,
    ADD COLUMN `pickupLocation` VARCHAR(191) NOT NULL,
    ADD COLUMN `pickupTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `returnDate` DATETIME(3) NOT NULL,
    ADD COLUMN `returnLocation` VARCHAR(191) NOT NULL,
    ADD COLUMN `returnTime` VARCHAR(191) NOT NULL,
    ADD COLUMN `vehiculoId` INTEGER NOT NULL,
    MODIFY `observacion` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `reservas_clienteId_fkey` ON `reservas`(`clienteId`);

-- CreateIndex
CREATE INDEX `reservas_vehiculoId_fkey` ON `reservas`(`vehiculoId`);

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_clienteId_fkey` FOREIGN KEY (`clienteId`) REFERENCES `clientes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_vehiculoId_fkey` FOREIGN KEY (`vehiculoId`) REFERENCES `vehiculos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
