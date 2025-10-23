import { Entity, PrimaryKey, OneToOne, Property } from '@mikro-orm/core';
import { Participant } from '../../participant/entities/participant.entity';

@Entity({ tableName: 'Player' })
export class Player {
  @PrimaryKey()
  id_participant!: string;

  @OneToOne(() => Participant, { owner: true, deleteRule: 'cascade' })
  participant!: Participant;

  @Property({ nullable: true })
  player_role?: string;

  @Property({ nullable: true })
  main_champion?: string;
}
