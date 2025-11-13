import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { Tournament } from './entities/tournament.entity';
import { EntityManager } from '@mikro-orm/sqlite';

@Injectable()
export class TournamentService {
  constructor(private readonly em: EntityManager) {}

  findAll() {
    return `This action returns all tournament`;
  }

  async findOne(id_tournament: string): Promise<Tournament> {
      const item = await this.em.findOne(Tournament, { id_tournament });
      if (!item) {
        throw new Error('Year not found');
      }
      return item;
  
  }

}
