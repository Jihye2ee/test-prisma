/*
  Warnings:

  - You are about to alter the column `nodule_long_axis` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `nodule_short_axis` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `average_diameter` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `short_diameter` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `long_diameter` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `part_solid_short_diameter` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `part_solid_long_diameter` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `volume` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.
  - You are about to alter the column `part_volume` on the `nodules` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Double`.

*/
-- AlterTable
ALTER TABLE `nodules` MODIFY `nodule_long_axis` DOUBLE NOT NULL,
    MODIFY `nodule_short_axis` DOUBLE NOT NULL,
    MODIFY `average_diameter` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `short_diameter` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `long_diameter` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `part_solid_short_diameter` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `part_solid_long_diameter` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `volume` DOUBLE NOT NULL DEFAULT 0,
    MODIFY `part_volume` DOUBLE NOT NULL DEFAULT 0;
