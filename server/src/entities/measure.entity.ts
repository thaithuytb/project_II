import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { CustomBaseEntity } from './customBaseEntity';
import { LocationMonitoring } from './location_monitoring.entity';

@Entity({ tableName: 'measures' })
export class Measure extends CustomBaseEntity {
  @Property()
  ph!: number;

  @Property()
  _do!: number;

  @Property()
  amoni!: number;

  @Property()
  clorua!: number;

  @Property()
  temperature!: number;

  @Property()
  salinity!: number;

  @ManyToOne({
    entity: () => LocationMonitoring,
  })
  locationMonitoring!: LocationMonitoring;
}
