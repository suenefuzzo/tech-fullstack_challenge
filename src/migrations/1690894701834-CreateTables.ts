import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1690894701834 implements MigrationInterface {
    name = 'CreateTables1690894701834'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "fullName" TO "full_name"`);
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "fullName" TO "full_name"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" RENAME COLUMN "full_name" TO "fullName"`);
        await queryRunner.query(`ALTER TABLE "clients" RENAME COLUMN "full_name" TO "fullName"`);
    }

}
