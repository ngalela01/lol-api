import { Entity, PrimaryKey, ManyToOne, Property } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';
import { Country } from '../../country/entities/country.entity';
import { Participant } from '../../participant/entities/participant.entity';

@Entity({ tableName: 'Nationality' })
export class Nationality {
  @PrimaryKey()
  id_nationality: string = uuidv4();

  @ManyToOne(() => Country)
  country!: Country;

  @ManyToOne(() => Participant)
  participant!: Participant;
}
