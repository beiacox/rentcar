-- CreateTable
CREATE TABLE `alquiler` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cantidad` INTEGER NOT NULL,
    `tipo_precio` INTEGER NOT NULL DEFAULT 0,
    `monto` DECIMAL(10, 2) NOT NULL,
    `abono` DECIMAL(10, 2) NOT NULL,
    `fecha_prestamo` DATETIME(0) NOT NULL,
    `fecha_devolucion` DATETIME(0) NOT NULL,
    `observacion` TEXT NULL,
    `estado` INTEGER NOT NULL DEFAULT 1,
    `id_cliente` INTEGER NOT NULL,
    `id_vehiculo` INTEGER NOT NULL,
    `id_doc` INTEGER NOT NULL,

    INDEX `id_cliente`(`id_cliente`),
    INDEX `id_doc`(`id_doc`),
    INDEX `id_vehiculo`(`id_vehiculo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `clientes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cedula` VARCHAR(10) NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `correo` VARCHAR(100) NULL,
    `telefono` VARCHAR(20) NOT NULL,
    `direccion` TEXT NOT NULL,
    `clave` VARCHAR(150) NULL,
    `fecha` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `estado` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `configuracion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `ruc` VARCHAR(20) NOT NULL,
    `nombre` VARCHAR(200) NOT NULL,
    `telefono` VARCHAR(15) NOT NULL,
    `correo` VARCHAR(100) NOT NULL,
    `direccion` VARCHAR(200) NOT NULL,
    `mensaje` TEXT NOT NULL,
    `logo` VARCHAR(10) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `credenciales` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    UNIQUE INDEX `User_username_key`(`username`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `documentos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `documento` VARCHAR(20) NOT NULL,
    `estado` INTEGER NOT NULL DEFAULT 1,
    `fecha` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `marcas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `marca` VARCHAR(50) NOT NULL,
    `estado` INTEGER NOT NULL DEFAULT 1,
    `fecha` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `f_recogida` DATETIME(0) NOT NULL,
    `f_entrega` DATETIME(0) NOT NULL,
    `cantidad` INTEGER NOT NULL DEFAULT 0,
    `tipo_precio` INTEGER NOT NULL DEFAULT 1,
    `monto` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `f_reserva` DATETIME(0) NOT NULL,
    `observacion` TEXT NULL,
    `estado` INTEGER NOT NULL DEFAULT 0,
    `id_vehiculo` INTEGER NOT NULL,
    `id_cliente` INTEGER NOT NULL,

    INDEX `id_cliente`(`id_cliente`),
    INDEX `id_vehiculo`(`id_vehiculo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tipos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tipo` VARCHAR(50) NOT NULL,
    `estado` INTEGER NOT NULL DEFAULT 1,
    `fecha` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `usuarios` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuario` VARCHAR(20) NOT NULL,
    `nombre` VARCHAR(100) NOT NULL,
    `apellido` VARCHAR(100) NULL,
    `correo` VARCHAR(80) NOT NULL,
    `telefono` VARCHAR(20) NULL,
    `direccion` VARCHAR(100) NULL,
    `perfil` VARCHAR(50) NOT NULL DEFAULT 'avatar.svg',
    `clave` VARCHAR(150) NOT NULL,
    `fecha` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `estado` INTEGER NOT NULL DEFAULT 1,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `vehiculos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `placa` VARCHAR(50) NOT NULL,
    `precio_hora` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `precio_dia` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `precio_mes` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `modelo` VARCHAR(50) NOT NULL,
    `kilometraje` VARCHAR(50) NOT NULL,
    `transmision` VARCHAR(50) NOT NULL,
    `asientos` INTEGER NOT NULL DEFAULT 0,
    `equipaje` VARCHAR(50) NOT NULL,
    `combustible` VARCHAR(50) NOT NULL,
    `foto` VARCHAR(50) NOT NULL,
    `estado` INTEGER NOT NULL DEFAULT 1,
    `fecha` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `id_tipo` INTEGER NOT NULL,
    `id_marca` INTEGER NOT NULL,

    INDEX `id_marca`(`id_marca`),
    INDEX `id_tipo`(`id_tipo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `alquiler` ADD CONSTRAINT `alquiler_ibfk_1` FOREIGN KEY (`id_vehiculo`) REFERENCES `vehiculos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alquiler` ADD CONSTRAINT `alquiler_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `alquiler` ADD CONSTRAINT `alquiler_ibfk_3` FOREIGN KEY (`id_doc`) REFERENCES `documentos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_ibfk_1` FOREIGN KEY (`id_vehiculo`) REFERENCES `vehiculos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservas` ADD CONSTRAINT `reservas_ibfk_2` FOREIGN KEY (`id_cliente`) REFERENCES `clientes`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehiculos` ADD CONSTRAINT `vehiculos_ibfk_1` FOREIGN KEY (`id_tipo`) REFERENCES `tipos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `vehiculos` ADD CONSTRAINT `vehiculos_ibfk_2` FOREIGN KEY (`id_marca`) REFERENCES `marcas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
