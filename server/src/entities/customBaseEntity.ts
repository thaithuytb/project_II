import { Property, PrimaryKey } from '@mikro-orm/core';

export abstract class CustomBaseEntity {
  @PrimaryKey({
    autoincrement: true,
  })
  id!: number;

  @Property()
  createdAt: Date = new Date();

  @Property({ onUpdate: () => new Date() })
  updatedAt: Date = new Date();
}
