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

  async findOne(id_participant: string){
    return this.em.findOne(Coach, {id_participant});
  }

  async create(id_participant: string, participant: Participant): Promise<Coach> {
    const coach = new Coach(id_participant, participant);
    await this.em.persistAndFlush(coach);
    return coach;

  }

  async delete(coach : Coach) {
    if (!coach) {
      throw new Error("L'entité à supprimer n'existe pas.");
    }
    await this.em.remove(coach).flush();
  }

  async update(id_participant: string, participant: Participant): Promise<Coach> {
    const entite = await this.em.findOne(Coach, {id_participant});
    if (!entite) {
      throw new Error('Entité non trouvée');
    }

    entite.participant = participant;
    
    await this.em.flush();
    return entite;
  }  

}
