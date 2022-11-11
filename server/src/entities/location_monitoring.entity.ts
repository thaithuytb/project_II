import { Collection, Entity, OneToMany, Property } from '@mikro-orm/core';
import { CustomBaseEntity } from './customBaseEntity';
import { Measure } from './measure.entity';

@Entity({ tableName: 'location_monitorings' })
export class LocationMonitoring extends CustomBaseEntity {
  @Property({ unique: true })
  name!: string;

  @OneToMany(() => Measure, (measure) => measure.locationMonitoring)
  measures = new Collection<Measure>(this);
}
