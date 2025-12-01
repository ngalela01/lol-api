import { Injectable } from '@nestjs/common';
import { CreateCoachDto } from './dto/create-coach.dto';
import { UpdateCoachDto } from './dto/update-coach.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Coach } from './entities/coach.entity';
import { Participant } from '../participant/entities/participant.entity';

@Injectable()
export class CoachService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<Coach[]> {
    return this.em.find(Coach, {}, {populate:['participant']})
  }

  async findOne(id : string) : Promise<Coach> {
    return this.em.findOneOrFail(Coach, {id_coach: id}, {populate: ['participant']})
  }

  async create(data: CreateCoachDto) : Promise<Coach> {
    const participant = await this.em.findOneOrFail(Participant, { id_participant: data.participant });

    const coach = this.em.create(Coach, {
      participant: participant,
    } as any);

    await this.em.persistAndFlush(coach);
    return coach;
  }

  async delete(id: string): Promise<{ message: string }> {
    const coach = await this.em.findOneOrFail(Coach, { id_coach: id }, { populate: ['participant'] });
    await this.em.removeAndFlush(coach);
    return { message: 'Coach removed successfully' };
  }

  async update(id: string, data: UpdateCoachDto): Promise<Coach> {
    const coach = await this.em.findOneOrFail(Coach, { id_coach: id }, { populate: ['participant'] });

    if (data.participant !== undefined) {
      const participant = await this.em.findOneOrFail(Participant, { id_participant: data.participant });
      coach.participant = participant;
    }

    await this.em.flush();
    return coach;
  }
}
