import { Entity, PrimaryKey, OneToOne } from '@mikro-orm/core';
import { Participant } from '../../participant/entities/participant.entity';

@Entity({ tableName: 'Coach' })
export class Coach {
  @PrimaryKey()
  id_participant!: string;

  @OneToOne(() => Participant, { owner: true, deleteRule: 'cascade' })
  participant!: Participant;

  constructor(id_participant: string, participant: Participant){
    this.id_participant = id_participant;
    this.participant = participant;
  }  
}
