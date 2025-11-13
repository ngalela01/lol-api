import { Injectable } from '@nestjs/common';
import { CreateAnnualTournamentDto } from './dto/create-annual-tournament.dto';
import { UpdateAnnualTournamentDto } from './dto/update-annual-tournament.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { AnnualTournament } from './entities/annual-tournament.entity';
import { Years } from '../years/entities/year.entity';
import { Tournament } from '../tournament/entities/tournament.entity';
import { Country } from '../country/entities/country.entity';

@Injectable()
export class AnnualTournamentService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<AnnualTournament[]> {
    return this.em.find(AnnualTournament, {}, {populate:['year', 'tournament', 'country']})
  }

  async findOne(id_years: string, id_tournament: string){
    return this.em.findOne(AnnualTournament, {id_years, id_tournament});
  }

  async create(years: Years, tournament: Tournament, year_id: string, tournament_id: string, country: Country, dateBeg : Date, dateEnd: Date, winner: string): Promise<AnnualTournament> {
    const annualLeague = new AnnualTournament(years, tournament, year_id, tournament_id, country, dateBeg, dateEnd, winner);
    await this.em.persistAndFlush(annualLeague);
    return annualLeague;
  }

  async delete(annualTournament : AnnualTournament) {
    if (!annualTournament) {
      throw new Error("L'entité à supprimer n'existe pas.");
    }
    await this.em.remove(annualTournament).flush();
  }

  async update(years: Years, tournament: Tournament, id_years: string, id_tournament: string, country: Country, dateBeg : Date, dateEnd: Date, winner: string): Promise<AnnualTournament> {
    const entite = await this.em.findOne(AnnualTournament, {id_years, id_tournament});
    if (!entite) {
      throw new Error('Entité non trouvée');
    }

    entite.year = years;
    entite.tournament = tournament;
    entite.country = country;
    entite.date_beginning = dateBeg;
    entite.date_end = dateEnd;
    entite.winner = winner;

    await this.em.flush();
    return entite;  
  }
}
