import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';

import { Country } from '../../country/entities/country.entity';
import { League } from '../../league/entities/league.entity';
import { Participant } from '../../participant/entities/participant.entity';


@Entity({ tableName: 'Team' })
export class Team {
  @PrimaryKey()
  id_team: string = uuidv4();

  @Property({ unique: true })
  name_team!: string;

  @Property({ nullable: true })
  creation_date?: Date;

  @ManyToOne(() => Country)
  country!: Country;

  @ManyToOne(() => League)
  league!: League;

  @OneToMany(() => Participant, participant => participant.team)
  participants = new Collection<Participant>(this);
}
