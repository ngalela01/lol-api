import { Injectable } from '@nestjs/common';
import { CreateAnnualLeagueDto } from './dto/create-annual-league.dto';
import { UpdateAnnualLeagueDto } from './dto/update-annual-league.dto';
import { AnnualLeague } from './entities/annual-league.entity';
import { EntityManager } from '@mikro-orm/sqlite';
import { League } from '../league/entities/league.entity';

import { Country } from '../country/entities/country.entity';
import { Years } from '../years/entities/years.entity';

@Injectable()
export class AnnualLeagueService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<AnnualLeague[]> {
    return this.em.find(AnnualLeague, {}, {populate:['year', 'league', 'country']})
  }

  async findOne(id : string) : Promise<AnnualLeague> {
    return this.em.findOneOrFail(AnnualLeague, {id_annual_league: id}, {populate: ['year', 'league', 'country']})
  }

  async create(data: CreateAnnualLeagueDto) : Promise<AnnualLeague> {
    
    const league = await this.em.findOneOrFail(League, { id_league: data.league_id });
    const year = await this.em.findOneOrFail(Years, { id_years: data.year_id });
    let country;
    if (data.country_id !== null){
      country = await this.em.findOneOrFail(Country, { id_country: data.country_id });
    }
    else {
      country = null;
    }


    const annual_league = this.em.create(AnnualLeague, {
      year: year,
      league: league,
      country: country,
      date_beginning: data.date_beginning,
      date_end: data.date_end,
      winner: data.winner,
    } as any);

    await this.em.persistAndFlush(annual_league);
    return annual_league;
  }

  async delete(id: string): Promise<{ message: string }> {
    const annual_league = await this.em.findOneOrFail(AnnualLeague, { id_annual_league: id }, { populate: ['year', 'league', 'country'] });
    await this.em.removeAndFlush(annual_league);
    return { message: 'Annual league removed successfully' };
  }

  async update(id: string, data: UpdateAnnualLeagueDto): Promise<AnnualLeague> {
    const annual_league = await this.em.findOneOrFail(AnnualLeague, { id_annual_league: id }, { populate: ['year', 'league', 'country'] });

    if (data.year_id !== undefined) {
      const year = await this.em.findOneOrFail(Years, { id_years: data.year_id });
      annual_league.year = year;
    }

    if (data.league_id !== undefined) {
      const league = await this.em.findOneOrFail(League, { id_league: data.league_id });
      annual_league.league = league;
    }

    if (data.country_id !== undefined) {
      const country = await this.em.findOneOrFail(Country, { id_country: data.country_id });
      annual_league.country = country;
    }

    if (data.date_beginning !== undefined) {
      annual_league.date_beginning = data.date_beginning;
    }

    if (data.date_end !== undefined) {
      annual_league.date_end = data.date_end;
    }

    if (data.winner !== undefined) {
      annual_league.winner = data.winner;
    }

    await this.em.flush();
    return annual_league;
  }


}
