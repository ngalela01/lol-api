import { Injectable } from '@nestjs/common';
import { CreateAnnualLeagueDto } from './dto/create-annual-league.dto';
import { UpdateAnnualLeagueDto } from './dto/update-annual-league.dto';
import { AnnualLeague } from './entities/annual-league.entity';
import { EntityManager } from '@mikro-orm/sqlite';
import { League } from '../league/entities/league.entity';
import { Years } from '../years/entities/year.entity';
import { Country } from '../country/entities/country.entity';

@Injectable()
export class AnnualLeagueService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<AnnualLeague[]> {
    return this.em.find(AnnualLeague, {}, {populate:['year', 'league', 'country']})
  }

  async findOne(id_years: string, id_league: string){
    return this.em.findOne(AnnualLeague, {id_years, id_league});
  }

  async create(years: Years, league: League, year_id: string, league_id: string, country: Country, dateBeg : Date, dateEnd: Date, winner: string): Promise<AnnualLeague> {
    const annualLeague = new AnnualLeague(years, league, year_id, league_id, country, dateBeg, dateEnd, winner);
    await this.em.persistAndFlush(annualLeague);
    return annualLeague;

  }

  async delete(annualLeague : AnnualLeague) {
    if (!annualLeague) {
      throw new Error("L'entité à supprimer n'existe pas.");
    }
    await this.em.remove(annualLeague).flush();
  }

    async update(years: Years, league: League, id_years: string, id_league: string, country: Country, dateBeg : Date, dateEnd: Date, winner: string): Promise<AnnualLeague> {
    const entite = await this.em.findOne(AnnualLeague, {id_years, id_league});
    if (!entite) {
      throw new Error('Entité non trouvée');
    }

    entite.year = years;
    entite.league = league;
    entite.country = country;
    entite.date_beginning = dateBeg;
    entite.date_end = dateEnd;
    entite.winner = winner;

    await this.em.flush();
    return entite;
  }


}
