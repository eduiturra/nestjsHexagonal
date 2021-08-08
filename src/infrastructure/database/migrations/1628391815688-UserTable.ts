import {MigrationInterface, QueryRunner} from "typeorm";

export class UserTable1628391815688 implements MigrationInterface {
    name = 'UserTable1628391815688'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `users` (`id` int NOT NULL AUTO_INCREMENT, `created_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updated_at` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `name` varchar(100) NOT NULL, `email` varchar(100) NOT NULL, UNIQUE INDEX `IDX_USERS` (`name`, `email`), UNIQUE INDEX `UNIQUE_USERS` (`email`), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `UNIQUE_USERS` ON `users`");
        await queryRunner.query("DROP INDEX `IDX_USERS` ON `users`");
        await queryRunner.query("DROP TABLE `users`");
    }

}
