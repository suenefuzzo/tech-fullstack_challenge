import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateContactEntity1690890606882 implements MigrationInterface {
    name = 'CreateContactEntity1690890606882'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."contacts_social_circle_enum" AS ENUM('Social Circle', 'Family', 'Friend', 'Work', 'Gym', 'School', 'Other')`);
        await queryRunner.query(`CREATE TABLE "contacts" ("id" SERIAL NOT NULL, "full_name" character varying(100) NOT NULL, "email" character varying(45) NOT NULL, "telephone" character varying NOT NULL, "social_circle" "public"."contacts_social_circle_enum" NOT NULL DEFAULT 'Social Circle', "createdAt" date NOT NULL DEFAULT now(), "updatedAt" date NOT NULL DEFAULT now(), "deletedAt" date, "clientId" integer, CONSTRAINT "UQ_752866c5247ddd34fd05559537d" UNIQUE ("email"), CONSTRAINT "PK_b99cd40cfd66a99f1571f4f72e6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "contacts" ADD CONSTRAINT "FK_8039454fab552403d5579cf7423" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "contacts" DROP CONSTRAINT "FK_8039454fab552403d5579cf7423"`);
        await queryRunner.query(`DROP TABLE "contacts"`);
        await queryRunner.query(`DROP TYPE "public"."contacts_social_circle_enum"`);
    }

}
