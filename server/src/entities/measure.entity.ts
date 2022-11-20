import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { CustomBaseEntity } from './customBaseEntity';
import { LocationMonitoring } from './location_monitoring.entity';

@Entity({ tableName: 'measures' })
export class Measure extends CustomBaseEntity {
  @Property()
  ph!: number;

  @Property()
  d0_do!: number;

  @Property()
  amoni!: number;

  @Property()
  clorua!: number;

  @Property()
  fe!: number;

  @ManyToOne({
    entity: () => LocationMonitoring,
  })
  locationMonitoring!: LocationMonitoring;

  constructor(
    ph: number,
    d0_do: number,
    amoni: number,
    clorua: number,
    fe: number,
  ) {
    super();
    this.ph = ph;
    this.d0_do = d0_do;
    this.amoni = amoni;
    this.clorua = clorua;
    this.fe = fe;
  }
}
