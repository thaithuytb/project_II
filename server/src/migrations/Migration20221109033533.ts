import { Migration } from '@mikro-orm/migrations';

export class Migration20221109033533 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "measures" rename column "do" to "_do";');
  }

  async down(): Promise<void> {
    this.addSql('alter table "measures" rename column "_do" to "do";');
  }

}
