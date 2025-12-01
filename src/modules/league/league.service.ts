import { Injectable } from '@nestjs/common';
import { League } from './entities/league.entity';
import { EntityManager } from '@mikro-orm/sqlite';
import { CreateLeagueDto } from './dto/create-league.dto';
import { UpdateLeagueDto } from './dto/update-league.dto';
import { Region } from '../region/entities/region.entity';

@Injectable()
export class LeagueService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<League[]> {
    return this.em.find(League, {}, {populate:['teams', 'annualLeagues']})
  }

  async findOne(id : string) : Promise<League> {
    return this.em.findOneOrFail(League, {id_league: id}, {populate: ['teams', 'annualLeagues']})
  }

  async create(data: CreateLeagueDto) : Promise<League> {
    const league = this.em.create(League, {
      long_name_league: data.long_name_league,
      short_name_league: data.short_name_league,
      region: data.region
    } as any);

    await this.em.persistAndFlush(league);
    return league;
  }

  async delete(id: string): Promise<{ message: string }> {
    const league = await this.em.findOneOrFail(League, { id_league: id }, { populate: ['teams', 'annualLeagues'] });
    await this.em.removeAndFlush(league);
    return { message: 'League removed successfully' };
  }

  async update(id: string, data: UpdateLeagueDto): Promise<League> {
    const league = await this.em.findOneOrFail(League, { id_league: id }, { populate: ['teams', 'annualLeagues'] });

    if (data.long_name_league !== undefined) {
      league.long_name_league = data.long_name_league;
    }

    if (data.short_name_league !== undefined) {
      league.short_name_league = data.short_name_league;
    }

    if (data.region !== undefined) {
      const region = await this.em.findOneOrFail(Region, { id_region: data.region });
      league.region = region;
    }

    await this.em.flush();
    return league;
  }
}
