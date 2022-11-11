import { Migration } from '@mikro-orm/migrations';

export class Migration20221109031851 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "measures" alter column "ph" type int using ("ph"::int);');
    this.addSql('alter table "measures" alter column "do" type int using ("do"::int);');
    this.addSql('alter table "measures" alter column "amoni" type int using ("amoni"::int);');
    this.addSql('alter table "measures" alter column "clorua" type int using ("clorua"::int);');
    this.addSql('alter table "measures" alter column "temperature" type int using ("temperature"::int);');
    this.addSql('alter table "measures" alter column "salinity" type int using ("salinity"::int);');
  }

  async down(): Promise<void> {
    this.addSql('alter table "measures" alter column "ph" type varchar(255) using ("ph"::varchar(255));');
    this.addSql('alter table "measures" alter column "do" type varchar(255) using ("do"::varchar(255));');
    this.addSql('alter table "measures" alter column "amoni" type varchar(255) using ("amoni"::varchar(255));');
    this.addSql('alter table "measures" alter column "clorua" type varchar(255) using ("clorua"::varchar(255));');
    this.addSql('alter table "measures" alter column "temperature" type varchar(255) using ("temperature"::varchar(255));');
    this.addSql('alter table "measures" alter column "salinity" type varchar(255) using ("salinity"::varchar(255));');
  }

}
