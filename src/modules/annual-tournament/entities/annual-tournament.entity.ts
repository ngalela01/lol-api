import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Country } from '../../country/entities/country.entity';
import { Tournament } from '../../tournament/entities/tournament.entity';
import { Years } from '../../years/entities/year.entity';

@Entity({ tableName: 'Annual_Tournament' })
export class AnnualTournament {
  @PrimaryKey({ fieldName: 'id_years' })
  id_years!: string;

  @PrimaryKey({ fieldName: 'id_tournament' })
  id_tournament!: string;

  @ManyToOne(() => Years)
  year!: Years;

  @ManyToOne(() => Tournament)
  tournament!: Tournament;

  @ManyToOne(() => Country, { nullable: true })
  country?: Country;

  @Property({ nullable: true })
  date_beginning?: Date;

  @Property({ nullable: true })
  date_end?: Date;

  @Property({ nullable: true })
  winner?: string;

  constructor(years: Years, tournament: Tournament, year_id: string, league_id: string, country: Country, dateBeg: Date, dateEnd: Date, winner: string){
    this.id_years = year_id;
    this.id_tournament = league_id;
    this.year = years;
    this.tournament = tournament;
    this.country = country;
    this.date_beginning = dateBeg;
    this.date_end = dateEnd;
    this.winner = winner;
  }
}
