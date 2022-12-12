import { MigrationInterface, QueryRunner } from "typeorm";

export class projectMainImage1670871452674 implements MigrationInterface {
    name = 'projectMainImage1670871452674'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\``);
        await queryRunner.query(`ALTER TABLE \`project\` ADD \`mainImage\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`project\` ADD UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` (\`slug\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`project\` DROP INDEX \`IDX_6fce32ddd71197807027be6ad3\``);
        await queryRunner.query(`ALTER TABLE \`project\` DROP COLUMN \`mainImage\``);
        await queryRunner.query(`CREATE UNIQUE INDEX \`IDX_6fce32ddd71197807027be6ad3\` ON \`project\` (\`slug\`)`);
    }

}
