import { Migration } from '@mikro-orm/migrations';

export class Migration20221120070542 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'alter table "measures" add column "d0_do" int not null, add column "fe" int not null;',
    );
    this.addSql('alter table "measures" drop column "_do";');
    this.addSql('alter table "measures" drop column "temperature";');
    this.addSql('alter table "measures" drop column "salinity";');
  }

  async down(): Promise<void> {
    this.addSql(
      'alter table "measures" add column "_do" int not null, add column "temperature" int not null, add column "salinity" int not null;',
    );
    this.addSql('alter table "measures" drop column "d0_do";');
    this.addSql('alter table "measures" drop column "fe";');
  }
}
