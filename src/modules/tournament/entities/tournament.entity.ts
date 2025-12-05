import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { AnnualTournament } from '../../annual-tournament/entities/annual-tournament.entity';


@Entity({ tableName: 'Tournament' })
export class Tournament {
  @PrimaryKey()
  id_tournament: string = uuidv4();

  @Property({ unique: true })
  long_name_tournament!: string;

  @Property({ unique: true })
  short_name_tournament!: string;

  @OneToMany(() => AnnualTournament, annual => annual.tournament)
  annualTournaments = new Collection<AnnualTournament>(this);
}
