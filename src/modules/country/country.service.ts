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

  async findOne(id : string) : Promise<Country> {
    return this.em.findOneOrFail(Country, {id_country: id}, {populate: ['teams', 'nationalities']})
  }

  async create(data: CreateCountryDto) : Promise<Country> {

    const country = this.em.create(Country, {
      name_country: data.name_country,
      code_iso: data.code_iso,
    } as any);

    await this.em.persistAndFlush(country);
    return country;
  }

  async delete(id: string): Promise<{ message: string }> {
    const country = await this.em.findOneOrFail(Country, { id_country: id }, { populate: ['teams', 'nationalities'] });
    await this.em.removeAndFlush(country);
    return { message: 'Country removed successfully' };
  }

  async update(id: string, data: UpdateCountryDto): Promise<Country> {
    const country = await this.em.findOneOrFail(Country, { id_country: id }, { populate: ['teams', 'nationalities'] });

    if (data.name_country !== undefined) {
      country.name_country = data.name_country;
    }

    if (data.code_iso !== undefined) {
      country.code_iso = data.code_iso;
    }

    await this.em.flush();
    return country;
  }
}
