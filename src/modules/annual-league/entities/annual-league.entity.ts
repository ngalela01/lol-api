import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Country } from '../../country/entities/country.entity';
import { League } from '../../league/entities/league.entity';
import { Years } from '../../years/entities/year.entity';

@Entity({ tableName: 'Annual_League' })
export class AnnualLeague {
  @PrimaryKey({ fieldName: 'id_years' })
  id_years!: string;

  @PrimaryKey({ fieldName: 'id_league' })
  id_league!: string;

  @ManyToOne(() => Years)
  year!: Years;

  @ManyToOne(() => League)
  league!: League;

  @ManyToOne(() => Country, { nullable: true })
  country?: Country;


  @Property({ nullable: true })
  date_beginning?: Date;

  @Property({ nullable: true })
  date_end?: Date;

  @Property({ nullable: true })
  winner?: string;

  constructor(years: Years, league: League, year_id: string, league_id: string, country: Country, dateBeg: Date, dateEnd: Date, winner: string){
    this.id_years = year_id;
    this.id_league = league_id;
    this.year = years;
    this.league = league;
    this.country = country;
    this.date_beginning = dateBeg;
    this.date_end = dateEnd;
    this.winner = winner;
  }
}
