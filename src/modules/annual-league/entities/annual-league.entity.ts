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
}
