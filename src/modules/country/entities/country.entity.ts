import { Entity, PrimaryKey, Property, OneToMany, Collection } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { Nationality } from '../../nationality/entities/nationality.entity';
import { Team } from '../../team/entities/team.entity';


@Entity({ tableName: 'Country' })
export class Country {
  @PrimaryKey()
  id_country: string = uuidv4(); 
  
  @Property({ unique: true })
  name_country!: string;

  @Property({ unique: true })
  code_iso!: string;

  @OneToMany(() => Team, team => team.country)
  teams = new Collection<Team>(this);

  @OneToMany(() => Nationality, nationality => nationality.country)
  nationalities = new Collection<Nationality>(this);
}
