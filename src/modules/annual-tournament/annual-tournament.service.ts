import { Injectable } from '@nestjs/common';
import { CreateAnnualTournamentDto } from './dto/create-annual-tournament.dto';
import { UpdateAnnualTournamentDto } from './dto/update-annual-tournament.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { AnnualTournament } from './entities/annual-tournament.entity';
import { Tournament } from '../tournament/entities/tournament.entity';
import { Country } from '../country/entities/country.entity';
import { Years } from '../years/entities/years.entity';

@Injectable()
export class AnnualTournamentService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<AnnualTournament[]> {
    return this.em.find(AnnualTournament, {}, {populate:['year', 'tournament', 'country']})
  }

  async findOne(id : string) : Promise<AnnualTournament> {
    return this.em.findOneOrFail(AnnualTournament, {id_annual_tournament: id}, {populate: ['year', 'tournament', 'country']})
  }

  async create(data: CreateAnnualTournamentDto) : Promise<AnnualTournament> {
    
    const tournament = await this.em.findOneOrFail(Tournament, { id_tournament: data.tournament });
    const year = await this.em.findOneOrFail(Years, { id_years: data.year });
    let country;
    if (data.country !== null) {
      country = await this.em.findOneOrFail(Country, { id_country: data.country });
    }
    else {
      country = null;
    }


    const annual_tournament = this.em.create(AnnualTournament, {
      year: year,
      tournament: tournament,
      country: country,
      date_beginning: data.date_beginning,
      date_end: data.date_end,
      winner: data.winner,
    } as any);

    await this.em.persistAndFlush(annual_tournament);
    return annual_tournament;
  }

  async delete(id: string): Promise<{ message: string }> {
    const annual_tournament = await this.em.findOneOrFail(AnnualTournament, { id_annual_tournament: id }, { populate: ['year', 'tournament', 'country'] });
    await this.em.removeAndFlush(annual_tournament);
    return { message: 'Annual tournament removed successfully' };
  }

  async update(id: string, data: UpdateAnnualTournamentDto): Promise<AnnualTournament> {
    const annual_tournament = await this.em.findOneOrFail(AnnualTournament, { id_annual_tournament: id }, { populate: ['year', 'tournament', 'country'] });

    if (data.year !== undefined) {
      const year = await this.em.findOneOrFail(Years, { id_years: data.year });
      annual_tournament.year = year;
    }

    if (data.tournament !== undefined) {
      const tournament = await this.em.findOneOrFail(Tournament, { id_tournament: data.tournament });
      annual_tournament.tournament = tournament;
    }

    if (data.country !== undefined) {
      const country = await this.em.findOneOrFail(Country, { id_country: data.country });
      annual_tournament.country = country;
    }

    if (data.date_beginning !== undefined) {
      annual_tournament.date_beginning = data.date_beginning;
    }

    if (data.date_end !== undefined) {
      annual_tournament.date_end = data.date_end;
    }

    if (data.winner !== undefined) {
      annual_tournament.winner = data.winner;
    }

    await this.em.flush();
    return annual_tournament;
  }
}
