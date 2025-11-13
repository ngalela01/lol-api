import { Injectable } from '@nestjs/common';
import { CreateParticipantDto } from './dto/create-participant.dto';
import { UpdateParticipantDto } from './dto/update-participant.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Participant } from './entities/participant.entity';

@Injectable()
export class ParticipantService {
  constructor(private readonly em: EntityManager) {}

  findAll() {
    return `This action returns all participant`;
  }

  async findOne(id_participant: string){
    return this.em.findOne(Participant, {id_participant});
  }

}
