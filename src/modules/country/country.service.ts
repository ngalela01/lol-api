import { Injectable } from '@nestjs/common';
import { CreateCountryDto } from './dto/create-country.dto';
import { UpdateCountryDto } from './dto/update-country.dto';
import { EntityManager } from '@mikro-orm/sqlite';
import { Country } from './entities/country.entity';

@Injectable()
export class CountryService {
  constructor(private readonly em: EntityManager) {}

  async findAll() : Promise<Country[]> {
    return this.em.find(Country, {}, {populate:['teams', 'nationalities']})
  }

  async findOne(id_country: string): Promise<Country> {
    const item = await this.em.findOne(Country, { id_country });
    if (!item) {
      throw new Error('Country not found');
    }
    return item;
  
  }

  async create(id_participant: string, participant: Participant): Promise<Coach> {
    const coach = new Coach(id_participant, participant);
    await this.em.persistAndFlush(coach);
    return coach;
  
  }
  
  async delete(coach : Coach) {
    if (!coach) {
      throw new Error("L'entité à supprimer n'existe pas.");
    }
    await this.em.remove(coach).flush();
  }
  
  async update(id_participant: string, participant: Participant): Promise<Coach> {
    const entite = await this.em.findOne(Coach, {id_participant});
    if (!entite) {
      throw new Error('Entité non trouvée');
    }
  
    entite.participant = participant;
      
    await this.em.flush();
    return entite;
  }

}
