import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { League } from '../../league/entities/league.entity';


@Entity({ tableName: 'Region' })
export class Region {
   @PrimaryKey()
  id_region: string = uuidv4();

  @Property({ unique: true })
  name_region!: string;

  @OneToMany(() => League, league => league.region)
  leagues = new Collection<League>(this);
}
