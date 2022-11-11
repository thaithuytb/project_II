import { Migration } from '@mikro-orm/migrations';

export class Migration20221109024609 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "location_monitorings" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" varchar(255) not null);');
    this.addSql('alter table "location_monitorings" add constraint "location_monitorings_name_unique" unique ("name");');

    this.addSql('create table "measures" ("id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "ph" varchar(255) not null, "do" varchar(255) not null, "amoni" varchar(255) not null, "clorua" varchar(255) not null, "temperature" varchar(255) not null, "salinity" varchar(255) not null, "location_monitoring_id" int not null);');

    this.addSql('alter table "measures" add constraint "measures_location_monitoring_id_foreign" foreign key ("location_monitoring_id") references "location_monitorings" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "measures" drop constraint "measures_location_monitoring_id_foreign";');

    this.addSql('drop table if exists "location_monitorings" cascade;');

    this.addSql('drop table if exists "measures" cascade;');
  }

}
