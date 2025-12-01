import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Participant, ParticipantRole } from './entities/participant.entity';
import { Team } from '../team/entities/team.entity';

@Injectable()
export class ParticipantService {
  constructor(private readonly em: EntityManager) { }

  async findAll() {
    return this.em.find(Participant, {});
  }

  async findOne(id: string) {
    return this.em.findOneOrFail(Participant, { id_participant: id }, { populate: ['nationalities'] });
  }

  async create(data: CreateParticipantDto): Promise<Participant> {
    const team = await this.em.findOneOrFail('Team', { id_team: data.team_id });
    const participant = this.em.create(Participant, {
      pseudo: data.pseudo,
      name: data.name,
      surname: data.surname,
      birth_date: data.birth_date,
      role: data.role as ParticipantRole,
      poste: data.poste,
      main_champion: data.main_champion,
      team: team,
    } as any);
    await this.em.persistAndFlush(participant);
    return participant;
  }

  async update(id: string, data: UpdateParticipantDto): Promise<Participant> {
    const participant = await this.em.findOneOrFail(Participant, { id_participant: id }, { populate: ['team'] });

    if (data.pseudo !== undefined) {
      participant.pseudo = data.pseudo;
    }

    if (data.name !== undefined) {
      participant.name = data.name;
    }

    if (data.surname !== undefined) {
      participant.surname = data.surname;
    }

    if (data.birth_date !== undefined) {
      participant.birth_date = data.birth_date;
    }

    if (data.role !== undefined) {
      participant.role = data.role as ParticipantRole;
    }

    if (data.poste !== undefined) {
      participant.poste = data.poste;
    }

    if (data.main_champion !== undefined) {
      participant.main_champion = data.main_champion;
    }

    if (data.team_id !== undefined) {
      const team = await this.em.findOneOrFail(Team, { id_team: data.team_id });
      participant.team = team;
    }

    await this.em.flush();
    return participant;
  }

  async delete(id: string): Promise<{ message: string }> {
    const participant = await this.em.findOneOrFail(Participant, { id_participant: id }, { populate: ['nationalities'] });
    await this.em.removeAndFlush(participant);
    return { message: 'Participant removed successfully' };
  }

}
