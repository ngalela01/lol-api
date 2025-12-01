import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Country } from '../../country/entities/country.entity';
import { Tournament } from '../../tournament/entities/tournament.entity';
import { Years } from '../../years/entities/year.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity({ tableName: 'Annual_Tournament' })
export class AnnualTournament {
  @PrimaryKey()
  id_annual_tournament: string = uuidv4();

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
}
