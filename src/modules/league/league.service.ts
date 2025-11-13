import { Injectable } from '@nestjs/common';
import { League } from './entities/league.entity';
import { EntityManager } from '@mikro-orm/sqlite';

@Injectable()
export class LeagueService {
  constructor(private readonly em: EntityManager) {}

  /*async findAll() : Promise<League[]> {
    return this.em.find(League, {}, {populate:['region']})
  }*/

  async findOne(id_league: string): Promise<League> {
    const item = await this.em.findOne(League, { id_league });
    if (!item) {
      throw new Error('Year not found');
    }
    return item;
  
  }
}
