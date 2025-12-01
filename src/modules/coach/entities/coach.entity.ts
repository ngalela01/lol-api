import { Entity, PrimaryKey, OneToOne } from '@mikro-orm/core';
import { Participant } from '../../participant/entities/participant.entity';
import { v4 as uuidv4 } from 'uuid';

@Entity({ tableName: 'Coach' })
export class Coach {
  @PrimaryKey()
  id_coach: string = uuidv4();

  @OneToOne(() => Participant, { owner: true, deleteRule: 'cascade' })
  participant!: Participant; 
}
