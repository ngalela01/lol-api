import { Entity, PrimaryKey, Property, ManyToOne, OneToMany, Collection } from '@mikro-orm/core';
import { v4 as uuidv4 } from 'uuid';

import { Nationality } from '../../nationality/entities/nationality.entity';
import { Team } from '../../team/entities/team.entity';

export enum ParticipantRole {
  PLAYER = 'player',
  COACH = 'coach',
}

@Entity({ tableName: 'Participant' })
export class Participant {
  @PrimaryKey()
  id_participant: string = uuidv4();

  @Property()
  pseudo!: string;

  @Property()
  name!: string;

  @Property()
  surname!: string;

  @Property({ nullable: true })
  birth_date?: Date;

  @Property({ nullable: false })
  role!: ParticipantRole;

  @Property({ nullable: true })
  poste?: string;

  @Property({ nullable: true })
  main_champion?: string;

  @ManyToOne(() => Team)
  team!: Team;

  @OneToMany(() => Nationality, nationality => nationality.participant)
  nationalities = new Collection<Nationality>(this);
}
