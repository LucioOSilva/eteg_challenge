import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsers1782340518691 implements MigrationInterface {
    name = 'CreateUsers1782340518691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "full_name" character varying NOT NULL, "cpf" character varying(14) NOT NULL, "email" character varying NOT NULL, "favorite_color" character varying(7) NOT NULL, "observations" text, "created_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_230b925048540454c8b4c481e1c" UNIQUE ("cpf"), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
