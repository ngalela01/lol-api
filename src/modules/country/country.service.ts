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

}
