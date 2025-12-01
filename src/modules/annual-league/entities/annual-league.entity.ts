import { Entity, PrimaryKey, Property, ManyToOne } from '@mikro-orm/core';
import { Country } from '../../country/entities/country.entity';
import { League } from '../../league/entities/league.entity';
import { Years } from '../../years/entities/year.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity({ tableName: 'Annual_League' })
export class AnnualLeague {
  @PrimaryKey()
  id_annual_league: string = uuidv4();

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
}
