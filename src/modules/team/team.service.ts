import { BadRequestException, Injectable } from '@nestjs/common';
import { EntityManager } from '@mikro-orm/sqlite';
import { Team } from './entities/team.entity';
import { League } from '../league/entities/league.entity';
import { Country } from '../country/entities/country.entity';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';


@Injectable()
export class TeamService {
  constructor(private readonly em: EntityManager) { }

  async findAll(): Promise<Team[]> {
    return this.em.find(Team, {}, { populate: ['league', 'country'] });
  }

  async findOne(id: string): Promise<Team> {
    return this.em.findOneOrFail(Team, { id_team: id }, { populate: ['league', 'country', 'participants'] });
  }

  async create(data: CreateTeamDto): Promise<Team> {
    const league = await this.em.findOneOrFail(League, { id_league: data.league_id });
    const country = await this.em.findOneOrFail(Country, { id_country: data.country_id });

    const team = this.em.create(Team, {
      name_team: data.name_team,
      creation_date: data.creation_date,
      league,
      country,
    } as any);

    await this.em.persistAndFlush(team);
    return team;
  }


  async update(id: string, data: UpdateTeamDto): Promise<Team> {
    const team = await this.em.findOneOrFail(Team, { id_team: id });

    if (data.name_team !== undefined) {
      team.name_team = data.name_team;
    }

    if (data.creation_date !== undefined) {
      team.creation_date = data.creation_date;
    }

    if (data.league_id !== undefined) {
      const league = await this.em.findOneOrFail(League, { id_league: data.league_id });
      team.league = league;
    }

    if (data.country_id !== undefined) {
      const country = await this.em.findOneOrFail(Country, { id_country: data.country_id });
      team.country = country;
    }

    await this.em.flush();
    return team;
  }


  async delete(id: string): Promise<{ message: string }> {
    const team = await this.em.findOneOrFail(
      Team,
      { id_team: id },
      { populate: ['participants'] } 
    );
    
    if (team.participants.length > 0) {
      throw new BadRequestException('Cannot delete a team with participants');
    }

    await this.em.removeAndFlush(team);

    return { message: `Team ${team.name_team} deleted successfully` };
  }


}


