import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';

import { AnnualLeague } from '../../annual-league/entities/annual-league.entity';
import { AnnualTournament } from '../../annual-tournament/entities/annual-tournament.entity';


@Entity({ tableName: 'Years' })
export class Years {
  @PrimaryKey()
  id_years: string = uuidv4();


  @Property()
  year!: number;

  @OneToMany(() => AnnualLeague, annual => annual.year)
  annualLeagues = new Collection<AnnualLeague>(this);

  @OneToMany(() => AnnualTournament, annual => annual.year)
  annualTournaments = new Collection<AnnualTournament>(this);
}
