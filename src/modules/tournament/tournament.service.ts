import { Injectable } from '@nestjs/common';
import { CreateTournamentDto } from './dto/create-tournament.dto';
import { UpdateTournamentDto } from './dto/update-tournament.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Tournament } from './entities/tournament.entity';

@Injectable()
export class TournamentService {
  constructor(private readonly em: EntityManager) {}

  async findAll(): Promise<Tournament[]> {
    return this.em.find(Tournament, {});
  }

  async findOne(id : string) : Promise<Tournament> {
    return this.em.findOneOrFail(Tournament, {id_tournament: id}, {populate: ['annualTournaments']})
  }

  async create(data: CreateTournamentDto) : Promise<Tournament> {
   const tournament = new Tournament();
   tournament.name_tournament = data.name_tournament
   await this.em.persistAndFlush(tournament);
   return tournament;
  }

  async update(id : string, data: UpdateTournamentDto) : Promise<Tournament> {
    const tournamentEntity = await this.em.findOneOrFail(Tournament, {
      id_tournament: id
    })

    if (data.name_tournament !== undefined) {
      tournamentEntity.name_tournament = data.name_tournament
    }

    await this.em.flush()
    return tournamentEntity
  }

  async delete(id : string) : Promise<Tournament> {
    const tournament = await this.em.findOneOrFail(Tournament, {id_tournament: id}, {populate: ['annualTournaments']})

    if (tournament.annualTournaments.length > 0) {
      throw new Error('Impossible de supprimer un tournoi avec des tournois annuels associés');
    }

    await this.em.removeAndFlush(tournament)
    return tournament
  }

}
