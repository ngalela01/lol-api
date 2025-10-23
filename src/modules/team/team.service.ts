import { Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/sqlite';
import { RequiredEntityData } from '@mikro-orm/core';
import { Team } from './entities/team.entity';


@Injectable()
export class TeamService {
  constructor(private readonly em: EntityManager) {}

  async findAll(): Promise<Team[]> {
    return this.em.find(Team, {}, { populate: ['league', 'country'] });
  }
  }


