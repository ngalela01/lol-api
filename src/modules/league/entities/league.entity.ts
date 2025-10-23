import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { AnnualLeague } from '../../annual-league/entities/annual-league.entity';
import { Region } from '../../region/entities/region.entity';
import { Team } from '../../team/entities/team.entity';


@Entity({ tableName: 'League' })
export class League {
  @PrimaryKey()
  id_league: string = uuidv4();;

  @Property({ unique: true })
  name_league!: string;

  @ManyToOne(() => Region)
  region!: Region;

  @OneToMany(() => Team, team => team.league)
  teams = new Collection<Team>(this);

  @OneToMany(() => AnnualLeague, annual => annual.league)
  annualLeagues = new Collection<AnnualLeague>(this);
}
