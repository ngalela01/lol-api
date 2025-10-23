import { Injectable } from '@nestjs/common';
import { League } from './entities/league.entity';
import { EntityManager } from '@mikro-orm/sqlite';

@Injectable()
export class LeagueService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<League[]> {
    return this.em.find(League, {}, {populate:['region']})
  }

}
